from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class NenasasaView(TemplateView):
    template_name = 'nenasasa/nenasasa.html'

class NenacallView(TemplateView):
    template_name = 'nenasasa/nenacall.html'


# You can also use function-based views
def nenasasa(request):
    return render(request, 'nenasasa/nenasasa.html')

def nenacall(request):
    return render(request, 'nenasasa/nenacall.html')
