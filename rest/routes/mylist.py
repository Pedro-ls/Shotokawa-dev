from typing import List
from ninja.router import Router
from ninja import Schema
from comic.models import Comic, MyList
from rest.schemes.comics import MyListSchema

router = Router()


class ComicSlugSchema(Schema):
    class Config:
        title = "Modelo Mangá com o campo slug"
    slug: str = "example: dsadasd"


@router.post("", response=MyListSchema)
def add_comic_the_list(request, payload: ComicSlugSchema):
    comic = Comic.objects.filter(slug=payload.slug).first()

    mylist = MyList.objects.filter(user=request.client).first()

    if mylist:
        if not mylist.comics.contains(comic):
            mylist.comics.add(comic)
    else:
        mylist = MyList()
        mylist.user = request.client
        mylist.save()
        mylist.comics.add(comic)
    mylist.save()
    comics = [{
        "name": comic.name,
        "description": comic.description,
        "type": comic.type,
        "category": comic.category.type,
        "slug": comic.slug,
        "old_min": comic.old_min,
    } for comic in mylist.comics.all()]
 
    return {
        "id": mylist.id,
        "comics": comics,
        "user": mylist.user.id
    }


@router.get("", response=MyListSchema)
def get_my_list(request):
    mylist = MyList.objects.filter(user=request.client).first()
    

    if mylist:
        comics = [{
            "name": comic.name,
            "description": comic.description,
            "type": comic.type,
            "slug": comic.slug,
            "image": comic.image_front_book.url, 
            "category": comic.category.type,
            "old_min": comic.old_min,
        } for comic in mylist.comics.all()]

        print(comics)
        return {
            "id": mylist.id,
            "comics": comics,
            "user": mylist.user.id
        }
    return None


@router.post("/delete", response=MyListSchema)
def remove_comic_of_the_list(request, payload: ComicSlugSchema):
    comic = Comic.objects.filter(slug=payload.slug).first()

    mylist = MyList.objects.filter(user=request.client).first()

    if mylist.comics.count() == 1:
        mylist.comics.clear()
    else:
        if mylist.comics.contains(comic):
            mylist.comics.remove(comic)

    mylist.save()

    comics = [{
            "name": comic.name,
            "description": comic.description,
            "slug": comic.slug,
            "type": comic.type,
            "image": comic.image_front_book.url,
            "slug": comic.slug, 
            "category": comic.category.type,
            "old_min": comic.old_min,
    } for comic in mylist.comics.all()]

    return {
        "id": mylist.id,
        "comics": comics,
        "user": mylist.user.id
    }
