import requests
import json
from django.shortcuts import render, redirect
from django.http import Http404 , HttpResponseRedirect
from main.models import List
from django.urls import reverse
from django.contrib.auth.decorators import login_required

@login_required
def detail(request , title , seria):
    try:
        url = f"https://api.anilibria.tv/v2/searchTitles?search={title}"
        req = requests.get(url)
        j = json.loads(req.text)
        anime = List.objects.get(title = title)
        items = List.objects.all()
        comments = anime.comment_set.order_by('-id')[:10]
        
    except:
        raise Http404("Где это вы?")
    
    count = 0
    seria_data = []
    range_j = j[0]["type"]["series"]
    
    for i in range(range_j):
        if count <= range_j:
            count = count + 1
            seria_data.insert(-0 , count)
            
    seria_data.reverse()
    
    data = {
        "anime": anime,
        "comments": comments,
        "seria": seria_data,
        "year": j[0]["season"]["year"],
        "genres": j[0]['genres'][0],
        "description": j[0]["description"],
        "url": j[0]["player"]["playlist"][seria]["hls"]["fhd"],
    }
    
    return render(request , 'detail/blocks/anime.html' , data)

@login_required
def comment(request , title):
    try:
        anime = List.objects.get(title = title)
        
    except:
        raise Http404("Где это вы?")
    
    anime.comment_set.create(comment = request.POST['comment'])
    
    return HttpResponseRedirect( reverse('detail' , args=(anime.title, 1)) )