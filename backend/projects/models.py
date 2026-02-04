from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    github_link = models.URLField(blank=True, null=True)
    project_image = models.ImageField(upload_to='project_images/', blank=True, null=True)
    project_tech = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100, blank=True)  # e.g., Programming, AI, Web
    proficiency = models.IntegerField(default=0)  # 0-100 scale

    def __str__(self):
        return f"{self.name} ({self.proficiency}%)"
