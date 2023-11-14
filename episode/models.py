import datetime
from django.db import models
from django.template.defaultfilters import slugify

# Create your models here.


class Episode(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField()
    num_pages = models.IntegerField()
    slug = models.SlugField(blank=True, null=True)
    created_at = models.DateTimeField(auto_created=True, default=datetime.datetime.now(tz=datetime.timezone.utc))

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name.lower())
        super().save(*args, **kwargs)

    
    def images(self):
        pages =  PageImage.objects.filter(pages = self).all()
        print(pages)
        return pages



    def __str__(self):
        return self.name


class PageImage(models.Model):
    num_page = models.IntegerField()
    pages = models.ForeignKey(
        Episode, on_delete=models.CASCADE, related_name="pages", null=True)

    photo = models.FileField(upload_to=f'Pages/')
