from django.db import models
from django.template.defaultfilters import slugify

from authentication.models import User
from episode.models import Episode
from rest.models import Client

# Create your models here.


class Author(models.Model):
    name = models.TextField()
    description = models.TextField()
    CHOICES_functions = (
        ("WR", "writer"),
        ("PT", "painter"),
    )
    photo = models.ImageField(upload_to="Authors/", null=True)
    functions = models.CharField(
        max_length=2, choices=CHOICES_functions, default="WR")

    class Meta:
        ordering = ['name', 'description', "photo", "functions"]

    def __str__(self):
        return self.name


class Editor(models.Model):
    name = models.CharField(max_length=45)
    description = models.TextField()
    photo = models.ImageField(upload_to="Editors/", null=True)

    def __str__(self):
        return self.name


class Category(models.Model):

    type = models.CharField(max_length=45)

    def __str__(self):
        return self.type


class SubCategory(models.Model):

    type = models.CharField(max_length=45)

    def __str__(self):
        return self.type


class Notice(models.Model):
    description = models.TextField()
    photo = models.ImageField(upload_to="notices")
    link = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.description[0:100].capitalize()


class Comic(models.Model):

    name = models.CharField(max_length=40, unique=True)
    image_title = image_back_book = models.ImageField(
        upload_to="image_titles", null=True)
    description = models.TextField()
    CHOICES_TYPE = (
        ("MH", "Manhuas"),
        ("WT", "Webtoons"),
        ("NV", "Novels"),
        ("MG", "Mangas"),
        ("HQ", "HQ's"),
    )

    CHOICES_TYPES_DICT = {
        "MH": "Manhuas",
        "WT": "Webtoons",
        "NV": "Novels",
        "MG": "Mangas",
        "HQ": "HQ's"
    }

    type = models.CharField(max_length=40, choices=CHOICES_TYPE, default="MH")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    sub_category = models.ForeignKey(
        SubCategory, null=True, max_length=3, on_delete=models.CASCADE)

    authors = models.ManyToManyField(Author)
    editor = models.ForeignKey(Editor, on_delete=models.CASCADE, null=True)

    copyright = models.TextField()

    old_min = models.IntegerField(default=12)

    stars = models.IntegerField(default=0)

    image_front_book = models.ImageField(
        upload_to="image_front_books", null=True)
    image_back_book = models.ImageField(
        upload_to="image_back_books", null=True)

    preview_reader = models.BooleanField(default=False)

    year_pub = models.CharField(max_length=4)

    slug = models.SlugField(blank=True, null=True)

    episodes = models.ManyToManyField(Episode, blank=True)

    notices = models.ManyToManyField(
        Notice, blank=True, related_name="notices")
    
    tag = models.CharField(max_length=30, null = True, blank=True)

    class Meta:
        ordering = ['name', 'description', 'copyright', 'year_pub']

    def type_full(self):
        fulltype = self.CHOICES_TYPES_DICT[self.type]
        return fulltype

    def stars_array(self):
        stars = []
        for i in range(0, self.stars):
            stars.append("star")

        return stars

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name.lower())
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class MyList(models.Model):
    comics = models.ManyToManyField(Comic,)
    user = models.ForeignKey(
        Client, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(self.user.id)


class ReadComics(models.Model):
    comics = models.ManyToManyField(Comic)
    user = models.ForeignKey(
        Client, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return str(self.user.username)


class PreviewComics(models.Model):
    comics = models.ManyToManyField(Comic, related_name="comics", blank=True)
    active = models.BooleanField(default=False)

    def __str__(self):
        array = [{"name": i.name} for i in self.comics.all()]
        str_var = "Preview Contem os comics "

        for i in array:
            str_var += i["name"] + " "

        return str_var


class Favorite(models.Model):
    comic = models.ForeignKey(
        Comic,  on_delete=models.CASCADE, blank=True, null=True)
    client = models.ForeignKey(
        Client,  on_delete=models.CASCADE, blank=True,  null=True)


class React(models.Model):
    comic = models.ForeignKey(
        Comic,  on_delete=models.CASCADE, blank=True, null=True)
    client = models.ForeignKey(
        Client,  on_delete=models.CASCADE, blank=True,  null=True)
    react = models.CharField(max_length=len("dislike"))
