
from django.contrib import admin
from .models import User
from import_export.admin import ExportActionMixin


class UserAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('username', 'email', 'company', 'phone', 'token')

admin.site.register(User, UserAdmin)
