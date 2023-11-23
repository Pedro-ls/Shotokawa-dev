import os
from django.http import HttpRequest, JsonResponse
from django.shortcuts import redirect, render
from django.conf import settings
from django.urls import reverse

from comic.models import Author, Category, Comic, Editor, SubCategory

from comic.forms import ComicForm
from episode.models import Episode
from episode.models import PageImage

from episode.forms import EpisodeForm
from rest.models import Account, Client
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
                    count_pages += 1
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


def pages(request, slug: str):
    episode = Episode.objects.filter(slug=slug).first()

    pages = episode.images()

    return render(request, 'episodes/pages.html', {
        "title": episode.name,
        "description": episode.description,
        "slug": episode.slug,
        "pages": pages.order_by("num_page")
    })


def update_pages(request, slug: str):
    if request.method == "POST":
        loc = str(request.POST.get("loc"))
        last_page = int(request.POST.get("last_page")[0])
        photos = request.FILES.getlist("photo")
        numpages = len(request.FILES.getlist("photo"))

        episode = Episode.objects.filter(slug=slug).first()

        old_pages = PageImage.objects.filter(
            num_page__gt=last_page, pages=episode).order_by("num_page").all()

        update_old_data = last_page + numpages + 1
        for page in old_pages:
            page.num_page = update_old_data
            page.save(force_update=True)
            update_old_data += 1

        index_photo = 0
        for i in range(last_page + 1, last_page + numpages + 1, 1):
            page = PageImage()
            page.num_page = i
            page.photo = photos[index_photo]
            page.pages = episode
            page.save()
            index_photo += 1

    return redirect(reverse('pages', kwargs={"slug": slug}),)


def reorder_pages(request, slug: str):
    episode = Episode.objects.filter(slug=slug).first()

    if request.method == "POST":
        old_page = int(request.POST.get("old_page"))
        new_page = int(request.POST.get("new_page"))

        page = PageImage.objects.filter(
            pages=episode, num_page=old_page).first()

        exist_page = PageImage.objects.filter(
            pages=episode, num_page=new_page).first()

        if exist_page:
            exist_page.num_page = old_page
            exist_page.save()

        page.num_page = new_page

        page.save()

    pages = [{"id": i.id, "num_page": i.num_page}
             for i in PageImage.objects.filter(pages=episode).order_by("id").all()]

    return JsonResponse({"message": "Sucesso na reordenação", "pages":  pages})


def delete_page(request, slug: str, page: int):
    episode = Episode.objects.filter(slug=slug).first()
    if request.method == "GET":
        page_deleting = PageImage.objects.filter(
            pages=episode, id=page).first()
        page_deleting.delete()
    return redirect(reverse('pages', kwargs={"slug": slug}),)


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


def delete_author(request, id: int):

    author = Author.objects.filter(id=id).first()
    author.photo.delete(True)
    author.delete()

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


def clients(request):

    if request.method == "GET":
        clients = Client.objects.all()
        users = []
        for client in clients:
            account = Account.objects.filter(client_account=client).first()
            photo = ""
            if client.photo:
                photo = client.photo.url
            users.append({
                "id": client.id,
                "name": client.name,
                "email": client.email,
                "image": photo,
                "isPayment": account.isPayment,
                "date_expired": account.date_expired,
                "mode_payment": account.payment_mode
            })
        return render(request, 'clients/list.html', {
            "clients": users
        })


def change_payment(request):

    client_id = int(request.POST.get("client_id"))
    status = bool(int(request.POST.get("status")))

    account = Account.objects.filter(client_account__id=client_id).first()
    account.isPayment = status
    account.save()

    return JsonResponse({"message": "Pagamento alterado com sucesso!!"})
