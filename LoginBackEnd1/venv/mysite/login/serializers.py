from .models import User, Server
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


class ServerSerializer(serializers.ModelSerializer):
    server_id = serializers.CharField(max_length = 18, validators=[
        UniqueValidator(
            queryset=Server.objects.all(),
            message='Such id already exists'
        )])
    #Name = serializers.CharField (max_length = 32)
    class Meta:
        model = Server
        fields = ('server_id', 'Name')

    
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id','user_name', 'message_count', 'interactions', 'twitch_addiction', 'gender', 'pronouns')
        extra_kwargs = {
            'parent_server': {'allow_null': True, 'required': False},
        }