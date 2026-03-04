from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class NenasasaView(TemplateView):
    template_name = 'nenasasa/nenasasa.html'

class NenacallView(TemplateView):
    template_name = 'nenasasa/nenacall.html'

class NenavoiceView(TemplateView):
    template_name = 'nenasasa/nenavoice.html'

class NenachatView(TemplateView):
    template_name = 'nenasasa/nenachat.html'

# You can also use function-based views
def nenasasa(request):
    return render(request, 'nenasasa/nenasasa.html')

def nenacall(request):
    return render(request, 'nenasasa/nenacall.html')

def nenavoice(request):
    return render(request, 'nenasasa/nenavoice.html')

def nenachat(request):
    return render(request, 'nenasasa/nenachat.html')

