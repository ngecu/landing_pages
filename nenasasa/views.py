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

class NenasdkView(TemplateView):
    template_name = 'nenasasa/nenasdk.html'

class NenasmsView(TemplateView):
    template_name = 'nenasasa/nenasms.html'

class NenabotView(TemplateView):
    template_name = 'nenasasa/nenabot.html'

class NenafinanceView(TemplateView):
    template_name = 'nenasasa/nenafinance.html'

class NenainsuranceView(TemplateView):
    template_name = 'nenasasa/nenainsurance.html'

class NenabusinessView(TemplateView):
    template_name = 'nenasasa/nenabusiness.html'

class NenaairtimeView(TemplateView):
    template_name = 'nenasasa/nenaairtime.html'

# You can also use function-based views
def nenasasa(request):
    return render(request, 'nenasasa/nenasasa.html')

def nenacall(request):
    return render(request, 'nenasasa/nenacall.html')

def nenavoice(request):
    return render(request, 'nenasasa/nenavoice.html')

def nenachat(request):
    return render(request, 'nenasasa/nenachat.html')

def nenasdk(request):
    return render(request, 'nenasasa/nenasdk.html')

def nenasms(request):
    return render(request, 'nenasasa/nenasms.html')

def nenabot(request):
    return render(request, 'nenasasa/nenabot.html')

def nenafinance(request):
    return render(request, 'nenasasa/nenafinance.html')

def nenainsurance(request):
    return render(request, 'nenasasa/nenainsurance.html')

def nenabusiness(request):
    return render(request, 'nenasasa/nenabusiness.html')

def nenaairtime(request):
    return render(request, 'nenasasa/nenaairtime.html')