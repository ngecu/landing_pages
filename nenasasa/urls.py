from django.urls import path
from . import views

app_name = 'nenasasa'

urlpatterns = [
    path('nenasasa', views.NenasasaView.as_view(), name='nenasasa'),
    path('nenacall/', views.NenacallView.as_view(), name='nenacall'),

    
    # You can also use function-based views
    # path('', views.home, name='home'),
    # path('products/', views.products, name='products'),
    # path('industries/', views.industries, name='industries'),
    # path('pricing/', views.pricing, name='pricing'),
    # path('contact/', views.contact, name='contact'),
]