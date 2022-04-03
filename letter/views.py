from django.shortcuts import render
from .models import Article

# Create your views here.
def home(requests):
    article = Article.objects
    return render(requests, 'home.html', {'article' : article})

def afterhome(requests):
    return render(requests, 'after_home.html')

def icon(requests):
    return render(requests, 'letter_icon.html')

def writing(requests):
    return render(requests, 'letter_writing.html')

def afterletter(requests):
    return render(requests, 'after_letter.html')

