from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import ServerSerializer, UserSerializer
from .models import User, Server
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class UserViews(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def put(self, request, server_id, user_id=None):
        user = Server.objects.get(server_id=server_id).user_set.get(user_id=user_id)
        print(request.data)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response({"status": "success", "data": serializer.data})
        else:
            return Response({"status": "error", "data": serializer.errors})

    def patch(self, request, server_id, user_id=None):
        user = Server.objects.get(server_id=server_id).user_set.get(user_id=user_id)
        print(request.data)
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response({"status": "success", "data": serializer.data})
        else:
            return Response({"status": "error", "data": serializer.errors})

    def post(self, request, server_id):
        print(request.data)
        server = Server.objects.filter(server_id=str(server_id))[0]
        serializer = UserSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        serializer.save(parent_server=server)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

    def get(self, request, server_id=None, user_id=None):
        if user_id:
            queryset = Server.objects.get(server_id=str(server_id)).user_set.get(user_id=user_id)
            serializer = UserSerializer(queryset)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

        queryset = Server.objects.get(server_id=str(server_id)).user_set.all()
        serializer = UserSerializer(queryset, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)


class ServerViews(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request):
        serializer = ServerSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        queryset = Server.objects.all().order_by('id')
        serializer = ServerSerializer(queryset, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)


class DeleteServer(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    def delete(self, request, server_id):
        queryset = Server.objects.get(server_id=str(server_id))
        queryset.delete()
        return Response({"status": "success", "data": server_id}, status=status.HTTP_200_OK)

