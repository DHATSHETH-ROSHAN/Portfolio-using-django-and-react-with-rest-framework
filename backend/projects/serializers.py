from rest_framework import serializers
from .models import Project, Skill

class ProjectSerializer(serializers.ModelSerializer):
    project_image = serializers.SerializerMethodField()
    
    class Meta:
        model = Project
        fields = '__all__'

    def get_project_image(self, obj):
        request = self.context.get("request")
        if obj.project_image and request:
            return request.build_absolute_uri(obj.project_inage.url)
        return None

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'
        