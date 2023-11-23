from django.db import models

# Create your models here.


class Client(models.Model):
    name = models.CharField(max_length=45)
    email = models.EmailField(unique=True, max_length=50)
    password = models.CharField(max_length=30)
    photo = models.ImageField(upload_to="clients/", null=True, blank=True)

    def __str__(self):
        return self.name


class Account(models.Model):
    isPayment = models.BooleanField(default=False)
    payment_mode = models.CharField(max_length=3, default="BLT")
    date_expired = models.DateField(default="", null=True, blank=True)
    client_account = models.ForeignKey(
        Client, related_name="client_account", null=False, on_delete=models.CASCADE)



