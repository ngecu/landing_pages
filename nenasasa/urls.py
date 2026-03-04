from django.urls import path
from . import views

app_name = 'nenasasa'

urlpatterns = [
    path('nenasasa', views.NenasasaView.as_view(), name='nenasasa'),
    path('nenacall/', views.NenacallView.as_view(), name='nenacall'),
    path('nenavoice/', views.NenavoiceView.as_view(), name='nenavoice'),
    path('nenachat/', views.NenachatView.as_view(), name='nenachat'),
    path('nenasdk/', views.NenasdkView.as_view(), name='nenasdk'),
    path('nenasms/', views.NenasmsView.as_view(), name='nenasms'),
    path('nenabot/', views.NenabotView.as_view(), name='nenabot'),
    path('nenabot/', views.NenabotView.as_view(), name='nenabot'),
    path('nenafinance/', views.NenafinanceView.as_view(), name='nenafinance'),
    path('nenainsurance/', views.NenainsuranceView.as_view(), name='nenainsurance'),
    path('nenabusiness/', views.NenabusinessView.as_view(), name='nenabusiness'),
    path('nenaairtime/', views.NenaairtimeView.as_view(), name='nenaairtime'),



    
    # You can also use function-based views
    # path('', views.home, name='home'),
    # path('products/', views.products, name='products'),
    # path('industries/', views.industries, name='industries'),
    # path('pricing/', views.pricing, name='pricing'),
    # path('contact/', views.contact, name='contact'),
]