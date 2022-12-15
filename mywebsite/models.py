from django.db import models

# Create your models here.

from django.db import models
from django.utils import timezone
from django.urls import reverse
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=50)
    content= RichTextUploadingField(blank=True, null=True)
    #content = RichTextField()
    image = models.ImageField(null=True, blank=True, upload_to='mypics' )
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
        
    def get_absolute_url(self):
        return reverse('Post-detail', kwargs= {'pk':self.pk})

class Accomplishment(models.Model):
    title = models.CharField(max_length=100)
    content = RichTextUploadingField(blank=True, null=True)
    links = models.URLField(null=True, blank=True, max_length=400)

    def __str__(self):
        return self.title