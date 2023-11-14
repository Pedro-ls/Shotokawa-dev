import os
from django.http import HttpRequest
from django.shortcuts import redirect, render
from django.conf import settings
from django.urls import reverse

from comic.models import Author, Category, Comic, Editor, SubCategory

from comic.forms import ComicForm
from episode.models import Episode
from episode.models import PageImage

from PIL import Image

from zipfile import ZipFile
from episode.forms import EpisodeForm
# Create your views here.


def index_modules(request):
    editors = Editor.objects.all()
    authors = Author.objects.all()
    categories = Category.objects.all()
    subcategories = SubCategory.objects.all()
    return render(request, "index.html", {
        "editors": editors,
        "authors": authors,
        "categories": categories,
        "subcategories": subcategories
    })


def register_comic(request):
    form = ComicForm()

    if request.method == "POST":
        form = ComicForm(request.POST, request.FILES)

        if form.is_valid():
            form.save(commit=True)
        else:
            print(form.errors.as_data())

    return render(request, "comics/register_comic.html", {
        "form": form
    })


def list_comic(request):
    comics = Comic.objects.all()

    types = {
        "MH": "Manhuas",
        "WT": "Webtoons",
        "NV": "Novels",
        "MG": "Mangas",
        "HQ": "HQ's",
    }
    return render(request, 'comics/list_comic.html', {
        "comics": comics,
        "types": types
    })


def register_episode(request: HttpRequest, slug):

    form = EpisodeForm()

    if request.method == "GET":
        comic = Comic.objects.filter(slug=str(slug)).first()

        if comic:
            return render(request, 'episodes/register_episode.html', {
                "form": form,
                "comic": comic
            })
        else:
            return redirect(reverse('list_episodes'))
    elif (request.method == "POST"):

        form = EpisodeForm(request.POST, request.FILES)
        if form.is_valid():
            name = form.data.get("name")
            description = form.data.get("description")

            comic = Comic.objects.filter(slug=slug).first()
            episode = Episode()
            episode.name = name
            episode.description = description
            episode.num_pages = 0



            episode.save()
            count_pages = 0

            
            for file in request.FILES.getlist("paginas"):
                print(file)
                try:
                    pageImage = PageImage()

                    pageImage.pages = episode
                    pageImage.num_page = int(str(file.name.split(".")[0]))
                    
                    pageImage.photo = file
                    
                    
                    pageImage.save()
                    count_pages+=1
                except:
                    print(
                        f"imagem {file.name}, não correspode com os requisitos")

            episode.num_pages = count_pages
            episode.save()

            comic.episodes.add(episode)

            comic.save()

            return redirect(reverse("list_comic"))
        else:
            print(form.errors.as_data())


def list_episode(request, slug):
    comic = Comic.objects.filter(slug=str(slug)).first()

    if comic:
        return render(request, 'episodes/list_episode.html', {
            "comic": comic
        })
    else:
        return redirect(reverse('list_comic'))


def register_editor(request):
    name = request.POST.get("name")
    description = request.POST.get("description")
    photo = request.FILES.get("photo")

    editor = Editor()

    editor.name = name
    editor.description = description
    editor.photo = photo

    editor.save()

    return redirect(reverse('index_modules'))


def register_author(request):
    name = request.POST.get("name")
    description = request.POST.get("description")
    photo = request.FILES.get("photo")

    author = Author()

    author.name = name
    author.description = description
    author.photo = photo

    author.save()

    return redirect(reverse('index_modules'))


def register_category(request):

    type = request.POST.get("type")

    category = Category()

    category.type = type

    category.save()

    return redirect(reverse('index_modules'))


def register_subcategory(request):
    type = request.POST.get("type")

    subcategory = SubCategory()

    subcategory.type = type

    subcategory.save()

    return redirect(reverse('index_modules'))
