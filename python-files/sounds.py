from gtts import gTTS 
import os 

# from playsound import playsound

# playsound('welcome.mp3')

def play(text):
    mytext = text
    language = 'en'
    myobj = gTTS(text=mytext, lang=language, slow=False) 
    myobj.save(text+".mp3") 


play("Say the new value")
# play("Say the Symptoms")
# play("Say the Diagonsis")
# play("Say the Prescription")
# play("Say the Advice")