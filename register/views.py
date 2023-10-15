from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic.edit import FormView
from .forms import RegisterForm
from django.urls import reverse_lazy
from .models import PlayerProfile

class Register(FormView):
    form_class = RegisterForm
    template_name = 'register/blocks/register.html'
    success_url = reverse_lazy("profile")
    
    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

def player_status(request):
    user = request.user
    try:
        player_profile = PlayerProfile.objects.get(user=user)
        if player_profile.is_admin:
            status = "Админ"
        else:
            status = "Пользователь"
    except PlayerProfile.DoesNotExist:
        status = "Не определен"
    
    return render(request, 'player_status.html', {'status': status})
