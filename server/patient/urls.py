from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from . import views

urlpatterns = [
    path('patientlogin', LoginView.as_view(template_name='patient/patientlogin.html'), name='patientlogin'),
    path('patientsignup', views.patient_signup_view, name='patientsignup'),
    path('patient-dashboard', views.patient_dashboard_view, name='patient-dashboard'),
    path('make-request', views.make_request_view, name='make-request'),
    path('my-request', views.my_request_view, name='my-request'),
    path('logout', LogoutView.as_view(next_page='patientlogin'), name='logout'),  # Add logout URL
]
