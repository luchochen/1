from django.shortcuts import render

def inicio(request):
    return render(request, 'anatomia/inicio.html')

def login(request):
    return render(request, 'anatomia/login.html')
def estudio(request):
    return render(request, 'anatomia/estudio.html')
def quiz(request):
    return render(request, 'anatomia/quiz.html')