from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic.edit import FormView
from .forms import RegisterForm
from django.urls import reverse_lazy

class Register(FormView):
    form_class = RegisterForm
    template_name = 'register/blocks/register.html'
    success_url = reverse_lazy("profile")
    
    def form_valid(self, form):
        form.save()
        return super().form_valid(form)