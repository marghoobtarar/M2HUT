from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.permissions import IsAuthenticated
from django.template import Context, Template
from django.core.mail import EmailMultiAlternatives

from django.utils.encoding import force_text, force_bytes
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import UserCreateSerializer, EmailSerializer, UserUpdateSerializer, ChangePasswordSerializer
from .models import User
from rest_framework import status
from .tokens import account_activation_token
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string, get_template

from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import EmailMessage
from rest_framework_jwt.utils import jwt_decode_handler
from django.core import serializers
import json
from user.views import getUser


# Create your views here.


class CreateUser(APIView):

    def get(self, request):

        return Response([UserCreateSerializer(user).data for user in User.objects.filter(is_superuser=False , admin_id =getUser(request))])

    def post(self, request):
        payload = request.data
        # print('creating the user',payload)
        _mutable = payload._mutable
        payload._mutable = True
        t = Template('<h3>'
           ' Dear User'
        '</h3>'
        '<p>Thank you fo applying to use the CETA artisan portal.</p>'
       '<p>We are happy to inform to inform you that your account has been approved</p>'
       '<p>Username: {{ email }} </p>'
        '<p>Password: {{ password }} </p>'
       ' <p>Regards,</p>'
        '<p>CETA Artisan Platform Team</p>'
        ' <img style="max-width:100px;max-height:100px src="https://herokudjangoapp11abc.herokuapp.com/media/images/logo.png">')

    #    ' <img style="max-width:100px;max-height:100px;" src="https://herokudjangoapp11abc.herokuapp.com/media/user_image/pitstop.png">')
        c = Context({'email':payload['email'], 'password':payload['password']})
        html = t.render(c)
        msg = EmailMessage('User Registration', html, 'asifbakhtiar18@gmail.com', [payload['email']])
        msg.content_subtype = "html"  # Main content is now text/html
        msg.send()

        # print(request.data)
        
        payload['admin_id'] = getUser(request)
        # to_email = payload['email']
        payload._mutable = _mutable

        html = t.render(c)
        serializer = UserCreateSerializer(data=payload)
        
        if serializer.is_valid():
            # template = get_template('account_registered.html')
            # html  = template.render(payload)
            mail_subject = 'User Credentials'
            message = msg
            # render_to_string('account_registered.html',
                # 'account_registered.html', 
                # {
                #     'html':html
                # 'user': payload,
                # 'domain':  get_current_site(request).domain,
                # 'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                # 'token': account_activation_token.make_token(user),
            # }
            # )
            # to_email = to_email
            # email = EmailMessage(
            #     mail_subject, message, to=[to_email]
            # )
            # email.send()
            user = serializer.save()
            user.set_password(user.password)
            user.save()


            return Response({'message':"User Has been created"},status=status.HTTP_201_CREATED)
        else:
            return Response({'message':serializer.errors},status=status.HTTP_400_BAD_REQUEST)


        return Response({'message':'User is already exists'}, status=status.HTTP_409_CONFLICT)

# class ManageUser(generics.RetrieveUpdateDestroyAPIView):
#     permission_classes = (IsAuthenticated,)
#     queryset = User.objects.all()
#     serializer_class = UserCreateSerializer


class ManageUser(APIView):

    def get(self, request):
        payload = request.data
        token = request.headers.get('Authorization').split(' ')[1]
        decoded_payload = jwt_decode_handler(token)

        try:
            user = User.objects.get(id=decoded_payload['user_id'])
        except (KeyError, User.DoesNotExist):
            return Response('User Not Found', status.HTTP_404_NOT_FOUND)
        else:
            serializer = UserCreateSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        
        payload = request.data
        _mutable = payload._mutable
        payload._mutable = True
        print('here is the payload', payload)
        
        # token = request.headers.get('Authorization').split(' ')[1]
        # decoded_payload = jwt_decode_handler(token)

        try:
            user = payload['user_id']
            payload['is_active'] = payload['accountStatus']
            
            payload._mutable = _mutable
            print(user)
            test = User.objects.get(id=user)

        except (KeyError, User.objects.get(id=user).DoesNotExist):
            return Response('User Not Found', status.HTTP_404_NOT_FOUND)
        else:

            serializer = UserUpdateSerializer(User.objects.get(id=user), data = payload)

            if serializer.is_valid():
                serializer.save()
                print('user has been updated',)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                print('user is not updating')
                return Response({'error':serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):

        try:
            home = User.objects.get(id=pk)
        except (KeyError, User.DoesNotExist):
            return Response('Data not found', status=status.HTTP_404_NOT_FOUND)
        else:
            home.delete()
            # deleteLocation(pk)
            return Response('Data deleted', status=status.HTTP_200_OK)


class UpdatePassword(APIView):
    """
    An endpoint for changing password.
    """
    # permission_classes = (permissions.IsAuthenticated, )

    def get_object(self, queryset=None):
        return self.request.user

    def put(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = ChangePasswordSerializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            old_password = serializer.data.get("old_password")
            if not self.object.check_password(old_password):
                return Response({"old_password": ["Wrong password."]},
                                status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            return Response(status=status.HTTP_204_NO_CONTENT)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserInformation(APIView):

    def post(self, request):

        user_info = []
        email = request.data.get('email')
        password = request.data.get('password')
        # user = authenticate(username=email, password=password)
        user = User.objects.get(email=email)
        login(request, user, backend='django.contrib.auth.backends.ModelBackend')
        user_info.append(user.id)
        user_info.append(user.username)
        user_info.append(user.email)
        user_info.append(user.gender)
        # user_info.append(user.city)
        user_info.append(user.full_name)

        return Response(user_info)


# class EmailActivate(APIView):

#     def post(self, request):
#         payload = request.data
#         serializer = EmailSerializer(data=payload)
#         email = request.data.get('email')
#         current_user = User.objects.get(email=email)
#         print("user", current_user.pk)
#         if serializer.is_valid():
#             current_site = get_current_site(request)
#             mail_subject = "Activate your account"
#             message1 = render_to_string('authsystem/acc_active_email.html', {
#                 'user': current_user,
#                 'domain': current_site.domain,
#                 'uid': urlsafe_base64_encode(force_bytes(current_user.pk)),
#                 'token': account_activation_token.make_token(current_user),
#             })
#             to_email = email

#             email = EmailMessage(
#                 mail_subject, message1, to=[to_email]
#             )
#             email.send()

#             return Response("Email Sent", status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# def activate(request, uidb64, token):
#     try:
#         uid = force_text(urlsafe_base64_decode(uidb64))
#         user1 = User.objects.get(pk=uid)

#     except(TypeError, ValueError, OverflowError, User.DoesNotExist):
#         user1 = None
#     if user1 is not None and account_activation_token.check_token(user1, token):
#         return HttpResponse("Email Verified")
#     else:
#         return HttpResponse("Email Not Verified")


# class password_reset_request(APIView):

    # def post(request):

    #   payload = request.data
        # 	data = payload['email']
        # 	associated_users = User.objects.filter(Q(email=data))
        # 	if associated_users.exists():
        # 		for user in associated_users:
        # 			subject = "Password Reset Requested"
        # 			# email_template_name = "main/password/password_reset_email.html"
        # 			c = {
        # 			"email":user.email,
        # 			'domain':get_current_site(request).domain,
        # 			"uid": urlsafe_base64_encode(force_bytes(user.pk)),
        # 			"user": user,
        # 			'token': default_token_generator.make_token(user),
        # 			'protocol': 'http',
        # 			}
    #              to_email = payload['email']
    #             email = EmailMessage(
    #                         subject, message, to=[to_email]
    #             )

        # 			# email = render_to_string(email_template_name, c)
        # 			try:
    #                 email.send()

        # 			except BadHeaderError:
        # 				return HttpResponse('Invalid header found.')
        # 			return HttpResponse("Email sent to your account")
    #     # password_reset_form = PasswordResetForm()
        #     return HttpResponse("Email not valid ")


def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        login(request, user)
        # return redirect('home')
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')
    else:

        return HttpResponse('Activation link is invalid!')
