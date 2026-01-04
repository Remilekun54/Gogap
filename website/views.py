from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import HeroSlide

def home(request):
    slides = HeroSlide.objects.filter(is_active=True)
    return render(request, 'index.html', {'slides': slides})

def about(request):
    return render(request, 'about.html')

def sermons(request):
    return render(request, 'sermons.html')

def store(request):
    return render(request, 'store.html')

def contact(request):
    return render(request, 'contact.html')

def offering(request):
    return render(request, 'offering.html')

def events(request):
    return render(request, 'events.html')

