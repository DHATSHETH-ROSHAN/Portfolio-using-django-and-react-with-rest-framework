from django.shortcuts import render

from rest_framework import viewsets
from .models import ContactMessage
from django.conf import settings
from .serializers import ContactMessageSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json


@csrf_exempt
def send_contact_email(request):
    if request.method =="POST":
        data = json.loads(request.body)

        name =data.get("name")
        email = data.get("email")
        message = data.get("message")

        subject = f"New contact Message from {name}"
        body = f"sender: {name}\nEmail: {email}\n\nmessage:\n{message}"

        send_mail(
            subject, body, settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER], fail_silently=False,
        )
        return JsonResponse({"Status": "success"})
    return JsonResponse({"status": "error"})