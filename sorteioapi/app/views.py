import random
import string
import environ
from rest_framework.response import Response
from rest_framework import serializers
from .models import *
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from twilio.rest import Client
from django.core.mail import send_mail
from django.db.models import F

env = environ.Env()
environ.Env.read_env()


class UserSerializer(serializers.ModelSerializer):
    token = serializers.ReadOnlyField()

    class Meta:
        model = User
        fields = '__all__'

    def validate_email(self, value):

        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este email já está em uso.")
        return value

    def create(self, validated_data):
        return User.objects.create(**validated_data)

    
    
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def perform_create(self, serializer):
        random_string = ''.join(str(random.randint(0, 100)) for _ in range(4))
        
        serializer.save(token=random_string)
        

class UserCountSerializer(serializers.Serializer):
    user_count = serializers.IntegerField()


class UserCountViewSet(viewsets.ViewSet):
    def list(self, request):

        try:
            existing_user_ids = list(User.objects.values_list('id', flat=True))

            if not existing_user_ids:
                return Response("Não há IDs de usuários existentes.")
            else:
                random_number = random.choice(existing_user_ids)
                print (random_number)

            try:
                user = User.objects.get(id=random_number)
                name = user.username
                title = 'Vencedor'
                message = "Parabéns, você venceu o nosso Sorteio! Tem até 10 minutos para se dirigir ao nosso stand e receber o seu premio, Angola Cables"
                to_email = user.email

                send_mail(
                subject=title,
                message=f'{name}\n{message}\n',
                from_email=env('EMAIL_HOST_USER_SRV'),
                auth_user=env('EMAIL_HOST_USER_SRV'),
                auth_password=env('EMAIL_HOST_PASSWORD_SRV'),
                recipient_list=to_email.split(';'),
                fail_silently=False
            )


                account_sid = env('TWILIO_ACCOUNT_SID')
                auth_token = env('TWILIO_AUTH_TOKEN')
                client = Client(account_sid, auth_token)
                client.messages.create(
                    from_=env('TWILIO_PHONE_NUMBER'),
                    to=user.phone,
                    body=f'{name}\n{title}\n{message}\n'
                )


                return Response({
                    'id': user.id,
                    'username': user.username,
                    'token': user.token,
                    'email': user.email,
                    'contacto': user.phone
                }, status=status.HTTP_201_CREATED)

            except User.DoesNotExist:
                return Response({'detail': 'User not found for the random number.'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
                     return Response({
                    'id': user.id,
                    'username': user.username,
                    'token': user.token,
                    'email': user.email,
                    'contacto': user.phone
                }, status=status.HTTP_201_CREATED)







   