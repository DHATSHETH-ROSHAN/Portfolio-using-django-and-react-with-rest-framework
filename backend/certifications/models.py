from django.db import models

# Create your models here.
class Certification(models.Model):
    title = models.CharField(max_length=255)
    organization = models.CharField(max_length=255)
    details = models.JSONField()
    date_obtained = models.DateField()
    credential_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.title} - {self.organization}"