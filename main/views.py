from django.shortcuts import render , redirect
from django.urls import reverse
from .models import List
import requests
import json

def index(request):
    items = List.objects.all()
    mainAnime = List.objects.order_by("-id")[:1]
    animes = []

    animes.append(items[len(items) - 12])
    animes.append(items[len(items) - 11])
    animes.append(items[len(items) - 10])
    animes.append(items[len(items) - 9])
    animes.append(items[len(items) - 8])
    animes.append(items[len(items) - 7])
    animes.append(items[len(items) - 6])
    animes.append(items[len(items) - 5])
    animes.append(items[len(items) - 4])
    animes.append(items[len(items) - 3])
    animes.append(items[len(items) - 2])
    animes.append(items[len(items) - 1])
    
    url = f"https://api.anilibria.tv/v3/searchTitles?search={mainAnime[0]}"
    req = requests.get(url)
    j = json.loads(req.text)
    
    data = {
        "items": animes,
        "item1": mainAnime[0],
        "description": j["list"][0]["description"]
    }
    
    return render(request , 'main/blocks/index.html' , data)