from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class NenasasaView(TemplateView):
    template_name = 'myapp/nenasasa.html'

class NenacallView(TemplateView):
    template_name = 'myapp/nenacall.html'


# You can also use function-based views
def nenasasa(request):
    return render(request, 'myapp/nenasasa.html')

def nenacall(request):
    return render(request, 'myapp/nenacall.html')
