from ninja import ModelSchema, Schema

from comic.models import Comic, MyList

from typing import List


class ComicModel(ModelSchema):
    class Config:
        title = "Modelo comum de mangá"
        model = Comic
        model_fields = "__all__"





class ComicRelated(Schema):
    front_comic: str = ""
    slug: str = ""

class NoticeSchema(Schema):
    description: str = ''
    photo: str = ''
    link: str


class Image(Schema):
    num_page: str
    photo: str


class EpisodePages(Schema):
    images: list[Image]


class EpisodeSchema(Schema):
    name: str
    slug: str
    created_at: str


class EpisodesResponse(Schema):
    episodes: list[EpisodeSchema]


class AuthorSchema(Schema):
    name: str
    photo: str
    function: str


class Comic(Schema):
    name: str
    description: str
    slug: str
    type: str
    editor: str
    authors: list[AuthorSchema]
    category: str
    sub_category: str
    image: str
    old_min: int
    related: list[ComicRelated]


class ComicPreview(Schema):
    name = ""
    description = ""
    image_title = ""
    image_back = ""
    image_front: str
    authors: list[AuthorSchema]
    category: str
    sub_category: str
    old_min: int
    slug = ""

    class Config:
        title = "Modelo Preview de mangá"


class EpisodeSchema(Schema):
    name: str
    description: str
    slug: str
    created_at: str


class CategorySchema(Schema):
    type: str


class ReactsSchema(Schema):
    favorites: int = 0
    react: str = "like|dislike"
    likes: int = 0
    dislikes: int = 0


class FavoriteSchema(Schema):
    favorite_current: bool
    favorites: int


class InfoComicEpisodes(Schema):
    comic: Comic
    episodes: list[EpisodeSchema]


class ComicByName(Schema):
    name: str


class MyListSchema(Schema):
    id: int
    comics: list
    user: int

    class Config:
        title = "Modelo da minha lista"


class ComicsCategoryAndSubcategory(Schema):
    class Config:
        title = "Modelo Manga classificado por categoria e sub-categoria"
    category: str = "Aventura"
    subcategory: str = "Drama"


class ComicsListPaginateScheme(Schema):

    class Config:
        title = "Modelo de lista de manga Paginado"

    name = ""
    description = ""
    type = ""
    category = ""
    sub_category = ""
    editor = ""
    old_min = 0
    stars = 0
    image_front_book = ""
    slug = ""
