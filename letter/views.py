from django.shortcuts import render

# Create your views here.
def home(requests):
    return render(requests, 'home.html')

def home2(requests):
    return render(requests, 'after_home.html')

def letter(requests):
    return render(requests, 'letter.html')

def writing(requests):
    return render(requests, 'writing.html')

