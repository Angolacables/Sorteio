from django.db import models

class User(models.Model):
    username =models.CharField(max_length=255, null=True, blank=True)
    email =models.CharField(max_length=255, null=True, blank=True)
    company =models.CharField(max_length=255, null=True, blank=True)
    phone =models.CharField(max_length=255, null=True, blank=True)
    token =models.CharField(max_length=255, null=True, blank=True)
    # phone_without_spaces = phone.replace(" ", "")

    def __str__(self):
        return self.username
    





