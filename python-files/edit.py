import json
import time 
import speech_recognition as sr 
from playsound import playsound 
from recognize import *

with open('sample.json') as fp:
    d = json.load(fp)

if __name__ == '__main__':
    # create recognizer and mic instances
    recognizer = sr.Recognizer()
    microphone = sr.Microphone()

    text = 'None'

    playsound('./mp3/Which Field do you want to edit.mp3')
    text = recognize_speech_from_mic(recognizer,microphone)
    print(text)
    word = text["transcription"].capitalize()
    
    if word in d.keys():
        playsound('./mp3/Say the new value.mp3')
        z = recognize_speech_from_mic(recognizer,microphone)
        d[word] = z["transcription"]
    else:
        print("Key not found")
    
    with open('sample.json','w') as fp:
        json.dump(d,fp)
