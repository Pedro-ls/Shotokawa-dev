from typing import List
from ninja.router import Router

from comic.models import Author, Category, Comic, Favorite, React, SubCategory
from ninja.pagination import paginate, PageNumberPagination
from episode.models import Episode, PageImage

from rest.schemes.comics import CategorySchema, ComicByName, ComicRelated, FavoriteSchema, NoticeSchema, ReactsSchema, ComicModel, ComicPreview, ComicsCategoryAndSubcategory, ComicsListPaginateScheme, EpisodePages, EpisodesResponse, InfoComicEpisodes
from rest.schemes.comics import Comic as ComicSchema
router = Router()


@router.get("", response=List[ComicsListPaginateScheme])
@paginate(PageNumberPagination, page_size=15, )
def get_all_comics_paginated(request):
    list_comics: List[Comic] = Comic.objects.all()

    comics = [
        {
            "name": comic.name,
            "description": comic.description,
            "type": comic.type_full(),
            "category": str(comic.category),
            "sub_category": str(comic.sub_category),
            "editor": comic.editor.name,
            "old_min": comic.old_min,
            "stars": comic.stars,
            "image_front_book": comic.image_front_book.url,
            "slug": comic.slug
        } for comic in list_comics]

    return comics


@router.get("categories", response=List[CategorySchema])
def get_categories(request):

    categories = Category.objects.all()

    return categories


@router.get("/{str:name}/info", response=InfoComicEpisodes | None)
def get_comic(request, name: str):
    comic = None
    episodes = None

    if (name):
        comic = Comic.objects.filter(slug=str(name)).first()

        authors = [{"name": i.name, "photo": i.photo.url,
                    "function": i.functions} for i in comic.authors.all()]

        category = ""
        sub_category = ""
        if comic.category:
            category = comic.category.type
        if comic.sub_category:
            sub_category = comic.sub_category.type

        episodes = [
            {
                "name": i.name,
                "description": i.description,
                "slug": i.slug,
                "created_at": str(i.created_at)
            } for i in comic.episodes.all()
        ]

        comics = Comic.objects.filter(tag=comic.tag).exclude(slug = name).all()

        list_related = []
        if comics:
            list_related = [{
                "front_comic": comic.image_front_book.url,
                "slug": comic.slug
            } for comic in comics]

        comic = {
            "name": comic.name,
            "description": comic.description,
            "slug": comic.slug,
            "type": comic.type,
            "editor": comic.editor.name,
            "authors": authors,
            "category": category,
            "sub_category": sub_category,
            "image": comic.image_front_book.url,
            "old_min": comic.old_min,
            "related": list_related
        }

    if comic:
        return {"comic": comic, "episodes": episodes}

    return None


@router.get("/{str:name}/episodes", response=EpisodesResponse, auth=None)
def get_all_episodes(request, name: str):
    if name:
        comic = Comic.objects.filter(slug=name).first()
        episodes = comic.episodes.all()
        print(episodes)
        if comic:
            return {
                "episodes": [
                    {
                        "name": i.name,
                        "slug": i.slug,
                        "created_at": str(i.created_at)
                    } for i in episodes
                ]
            }
    return None


@router.get("/{str:name}/episodes/{str:episode}", response=EpisodePages)
def get_episodes_from_comic(request, name: str, episode: str):
    images = None

    if (name and episode):
        comic: Comic = Comic.objects.filter(slug=str(name)).first()
        episode: Episode = comic.episodes.filter(slug=episode).first()

        images = PageImage.objects.filter(
            pages=episode).order_by("num_page").all()

    return {
        "images": [{"num_page": value.num_page, "photo": value.photo.url} for value in images]
    }


@router.get("/recents_comics", response=List[ComicPreview] | None)
def get_comic_by_name_latest(request):
    comics = Comic.objects.filter(preview_reader=True).all()

    formated_list = []

    for comic in comics:

        authors = [{"name": i.name, "photo": i.photo.url,
                    "function": i.functions} for i in comic.authors.all()]

        category = ""
        sub_category = ""
        if comic.category:
            category = comic.category.type
        if comic.sub_category:
            sub_category = comic.sub_category.type

        formated_list.append({
                "name": comic.name,
                "description": comic.description,
                "image_title": comic.image_title.url,
                "image_back": comic.image_back_book.url,
                "image_front": comic.image_front_book.url,
                "editor": comic.editor.name,
                "old_min": comic.old_min,
                "category": category,
                "sub_category": sub_category,
                "slug": comic.slug,
                "authors": authors
            }
        )
        print("List formated")
    return formated_list


@router.get("/comics_related/{str:tag}", response=List[ComicRelated] | None)
def get_comic_by_name_latest(request, tag: str):
    comics = Comic.objects.filter(tag=tag).all()

    formated_list = [{
        "front_comic": comic.image_front_book.url,
        "slug": comic.slug
    } for comic in comics]

    return formated_list


@router.get("categories/subcategories", response=List[ComicsListPaginateScheme])
def get_all_comics_filtered_by_category_and_subcategories(request, payload: ComicsCategoryAndSubcategory):

    test_comics = Comic.objects.filter(
        category__type=payload.category
    ).all()

    data = []
    for i in test_comics:
        list_subcategory = [i.type for i in i.sub_category.all()]
        print(list_subcategory)
        if payload.subcategory in list_subcategory:
            data.append(i)

    return data


@router.get("works/{str:type}/categories/{str:category}", response=List[ComicModel] | None)
def type_categories_returned_comic(request, type: str, category: str):

    category = Category.objects.filter(type=category).first()

    comics = Comic.objects.filter(type=type, category=category).all()

    return comics


@router.get("/reacts/{str:slugComic}/{str:action}/{str:react}", response=ReactsSchema | None, )
def reacts(request, slugComic: str, action: str, react: str):
    comic = Comic.objects.filter(slug=str(slugComic)).first()
    client = request.client
    if action == "read":
        exists = React.objects.filter(client=client, comic=comic).exists()
        likes_count = React.objects.filter(react="like").count()
        dislikes_count = React.objects.filter(react="dislike").count()
        if exists:
            reaction = React.objects.filter(client=client, comic=comic).first()
            return {
                "react": reaction.react,
                "favorites": likes_count + dislikes_count,
                "likes": likes_count,
                "dislikes": dislikes_count
            }
        else:
            return {
                "react": "",
                "favorites": likes_count + dislikes_count,
                "likes": likes_count,
                "dislikes": dislikes_count
            }

    reaction = None

    exists = React.objects.filter(client=client, comic=comic).exists()

    if exists:

        reaction = React.objects.filter(client=client, comic=comic).first()

        if action == "change":
            if (reaction.react != react):
                reaction.react = react
                reaction.save()
        elif action == "delete":
            reaction.delete()
            reaction = None
    else:
        if action == "add":
            reaction = React()
            reaction.client = client
            reaction.comic = comic
            reaction.react = react
            reaction.save()

    likes_count = React.objects.filter(react="like").count()
    dislikes_count = React.objects.filter(react="dislike").count()

    reaction_object = ""
    if (reaction != None):
        reaction_object = reaction.react

    return {
        "react": reaction_object,
        "favorites": likes_count + dislikes_count,
        "likes": likes_count,
        "dislikes": dislikes_count
    }


@router.get("/{str:slug}/favorites/{str:action}", response=FavoriteSchema | None, )
def favorites(request, slug: str, action: str):

    comic = Comic.objects.filter(slug=str(slug)).first()
    client = request.client

    favorite = None

    exists = Favorite.objects.filter(client=client, comic=comic).exists()
    if (action == "apply"):
        if exists:

            favorite = Favorite.objects.filter(
                client=client, comic=comic).first()

            favorite.delete()
            favorite = None
        else:
            favorite = Favorite()
            favorite.client = client
            favorite.comic = comic
            favorite.save()

        favorite_count = Favorite.objects.count()

        if (favorite):
            favorite_current = True
        else:
            favorite_current = False
    elif (action == "read"):
        if exists:
            favorite = Favorite.objects.filter(
                client=client, comic=comic).first()
        else:
            favorite = None

        favorite_count = Favorite.objects.count()
        if (favorite):
            favorite_current = True
        else:
            favorite_current = False

        print(favorite_current)

    return {
        "favorite_current": favorite_current,
        "favorites": favorite_count
    }


@router.get("/{str:slug}/notices", response=List[NoticeSchema] | None)
def get_notices(request, slug: str):
    notices = None

    if (slug):
        comic = Comic.objects.filter(slug=str(slug)).first()
        notices = [{"description": str(notice.description), "photo": str(
            notice.photo.url), "link": str(notice.link)} for notice in comic.notices.all()]

    return notices


@router.get("/{str:name}", response=List[ComicModel] | None)
def get_comic_by_name(request, name: str):
    comics = None
    print("teste")
    if (name):
        comics = Comic.objects.filter(name__icontains=str(name)).all()
    return comics
