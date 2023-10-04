from django.db import models

class List(models.Model):
    title = models.CharField(max_length=40 , default="None")
    image = models.ImageField(upload_to="images/")
    director = models.CharField(max_length=20 , default="None")
    country = models.CharField(max_length=20 , default="None")
    premiere = models.DateField(default="2010-01-01")
    audio_tracks = models.CharField(max_length=50 , default="None")
    subtitles = models.CharField(max_length=50 , default="None")
    season_time = models.CharField(max_length=8 , default="all")
    genre = models.CharField(max_length=20 , default="all")
    studio = models.CharField(max_length=30 , default="all")
    sorting_anime = models.CharField(max_length=50 , default="all")
    
    def __str__(self):
        return self.title
    
class Comment(models.Model):
    anime = models.ForeignKey(List , on_delete=models.CASCADE)
    comment = models.TextField()
    
    def __str__(self):
        return self.comment