
# Create your views here.
from django.shortcuts import render
from . models import Post, Accomplishment
from urllib import request
from django.http import HttpResponse
from django.views.generic import ListView, DetailView



# Create your views here.

class AccomplishmentListView(ListView):
     model = Accomplishment
     template_name= 'mywebsite/accomplishments.html'
     context_object_name= 'Accomplishments'

class PostListView(ListView):
    paginate_by= 2
    model = Post
    template_name= 'mywebsite/post.html'
    context_object_name= 'Posts'

class PostDetailView(DetailView):
    model = Post
  
    
def homepage(request):
    return render(request, 'mywebsite/home.html')

def aboutpage(request):
    return render(request,'mywebsite/about.html' )

def blackJack(request):
    return render(request, 'mywebsite/black_jack.html' )


