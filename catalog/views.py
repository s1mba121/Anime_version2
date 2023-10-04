from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from main.models import List

def catalog(request , season , sorting , genre , studio):
    seasons = []
    genres = []
    sortings = []
    studios = []
    
    
    if "winter" in season:
        seasons.append("winter")
        
    elif "summer" in season:
        seasons.append("summer")
        
    elif "autumn" in season:
        seasons.append("autumn")
        
    elif "spring" in seasons:
        seasons.append("spring")
        
    else:
        seasons.append("all")
        
    if "Toei Animation" in studio:
        studios.append("Toei Animation")
        
    elif "Sunrise" in studio:
        studios.append("Sunrise")
        
    elif "J.C.Staff" in studio:
        studios.append("J.C.Staff")
        
    elif "Madhouse" in studio:
        studios.append("Madhouse")
        
    elif "TMS Entertainment" in studio:
        studios.append("TMS Entertainment")
        
    elif "Production I.G" in studio:
        studios.append("Production I.G")
        
    else:
        studios.append("all")
        
    if "television_series" in sorting:
        sortings.append("TV")
        
    elif "special" in sorting:
        sortings.append("special")
        
    elif "movie" in sorting:
        sortings.append("movie")
        
    elif "screen" in sorting:
        sortings.append("screen")
        
    else:
        sortings.append("all")
        
    if "fantastic" in genre:
        genres.append("fantastic")
    
    elif "comedy" in genre:
        genres.append("comedy")
        
    elif "kodomo" in genre:
        genres.append("kodomo")
        
    elif "shonen" in genre:
        genres.append("shonen")
        
    else:
        genres.append("all")
        
    if "all" in season and sorting and genre and studio:
        anime = List.objects.all()
        
    else: 
        anime = List.objects.filter(season_time = "".join(seasons) , genre = "".join(genres) , studio = "".join(studios) , sorting_anime = "".join(sortings))
    
    data = {
        "data": anime,
    }
    
    return render(request , 'catalog/blocks/catalog.html' , data)

def filter(request):
    
    season = []
    genre = []
    studio = []
    format = []

    winter = request.POST.getlist('winter')
    summer = request.POST.getlist('summer')
    autumn = request.POST.getlist('autumn')
    spring = request.POST.getlist('spring')
    fantastic = request.POST.getlist('fantastic')
    drama = request.POST.getlist('drama')
    comedy = request.POST.getlist('comedy')
    kodomo = request.POST.getlist('kodomo')
    shonen = request.POST.getlist('shonen')
    one = request.POST.getlist('1')
    two = request.POST.getlist('2')
    thee = request.POST.getlist('3')
    four = request.POST.getlist('4')
    five = request.POST.getlist('5')
    six = request.POST.getlist('6')
    television_series = request.POST.getlist('television_series')
    movie = request.POST.getlist('movie')
    special = request.POST.getlist('special')
    screen = request.POST.getlist('screen')
    
    if winter:
        season.append("winter")
    
    if summer:
        season.append("summer")
        
    if autumn:
        season.append("autumn")
    
    if spring:
        season.append("spring")
        
    if fantastic:
        genre.append("fantastic")
    
    if drama:
        genre.append("drama")
        
    if comedy:
        genre.append("comedy")
    
    if kodomo:
        genre.append("kodomo")
        
    if shonen:
        genre.append("shonen")
    
    if one:
        studio.append("Toei Animation")
        
    if two:
        studio.append("Sunrise")
    
    if thee:
        studio.append("J.C.Staff")
        
    if four:
        studio.append("Madhouse")
    
    if five:
        studio.append("TMS Entertainment")
        
    if six:
        studio.append("Production I.G")
    
    if television_series:
        format.append("television_series")
        
    if movie:
        format.append("movie")
    
    if special:
        format.append("special")
        
    if screen:
        format.append("screen")
    
    
    if season:
        pass
    
    else:
        season.append("all")
        
        
    if genre:
        pass
    
    else:
        genre.append("all")
        
        
    if studio:
        pass
    
    else:
        studio.append("all")
        
        
    if format:
        pass
    
    else:
        format.append("all")
    
    
    return HttpResponseRedirect( reverse('catalog' , args=(", ".join(season) , ", ".join(format) , ", ".join(genre) ,", ".join(studio))) )

def catalog_none(request):
    anime = List.objects.all()
    
    return render(request , 'catalog/blocks/catalog.html' , {"data": anime})