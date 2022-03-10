from django.db import models

# Create your models here.
class User(models.Model):
    parent_server = models.ForeignKey('Server', on_delete=models.CASCADE,default="000000000000000000",
        blank=True)
    user_id = models.CharField(max_length = 18, default="000000000000000000")
    user_name = models.CharField(max_length = 18, default="DEFAULT")
    message_count = models.CharField(max_length = 18, default="0")
    interactions = models.CharField(max_length = 18, default="0")
    twitch_addiction = models.CharField(max_length = 18, default="0")
    gender = models.CharField(max_length = 100, default="Not Set")
    pronouns = models.CharField(max_length = 100, default="Not Set")
    def __str__(self):
        return self.user_id

class Server(models.Model):
    server_id = models.CharField(max_length=18)
    Name = models.CharField(max_length=32)
    def __str__(self):
        return self.Name
