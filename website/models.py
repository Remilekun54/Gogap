

# Create your models here.

from django.db import models

class HeroSlide(models.Model):
    title = models.CharField(max_length=200, help_text="Use <br> for line breaks and <span class='text-secondary italic'>Text</span> for gold text")
    sub_heading = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='hero_slides/')
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title