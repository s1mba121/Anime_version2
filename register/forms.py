from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from .models import PlayerProfile

class RegisterForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User

class PlayerStatusForm(forms.ModelForm):
    class Meta:
        model = PlayerProfile
        fields = ['is_admin']