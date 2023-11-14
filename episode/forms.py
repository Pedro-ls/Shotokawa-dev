from django import forms


class EpisodeForm(forms.Form):
    name = forms.CharField(max_length=50, required=True)
    description = forms.Field(widget=forms.Textarea, required=True)

    pages = forms.FileField(
        widget=forms.ClearableFileInput(attrs={"allow_multiple_selected": True, "multiple": ""}), required=False
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field_name, field in self.fields.items():
            field.widget.attrs["class"] = "w-full bg-d-darker-100 focus:border focus:border-d-orange-50 text-d-orange-50 placeholder:text-zinc-700 rounded-md px-4 py-2 outline-none"
