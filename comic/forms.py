from django import forms
from .models import Comic


class ComicForm(forms.ModelForm):
    class Meta:
        model = Comic
        fields = (
            'name',
            'description',
            'type',
            'category',
            'sub_category',
            'authors',
            'editor',
            'copyright',
            'old_min',
            'image_front_book',
            'image_back_book',
            'year_pub',
        )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field_name, field in self.fields.items():
            field.widget.attrs["class"] = "styled-comic-register"
