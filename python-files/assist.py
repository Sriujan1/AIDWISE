import time 
import json
from playsound import playsound
from recognize import *
import sys

if __name__ == '__main__':

    recognizer = sr.Recognizer()
    microphone = sr.Microphone()

    d = {}
    text = 'None'

    d['Id'] = sys.argv[3] 
    d['Name'] = sys.argv[2]

    playsound("./mp3/Say the Symptoms.mp3")
    text = recognize_speech_from_mic(recognizer, microphone)
    d["Symptoms"] = text["transcription"]
    if not text["Success"]:
        print("I didn't catch that. What did you say?\n")              
    if text["error"]:
        print("ERROR: {}".format(text["error"]))

    playsound('./mp3/Say the Diagnosis.mp3')
    text = recognize_speech_from_mic(recognizer,microphone)
    d["Diagnosis"] = text["transcription"]
    if not text["Success"]:
        print("I didn't catch that. What did you say?\n")              
    if text["error"]:
        print("ERROR: {}".format(text["error"]))

    playsound('./mp3/Say the Prescription.mp3')
    text = recognize_speech_from_mic(recognizer,microphone)
    d["Prescription"] = text["transcription"]
    if not text["Success"]:
        print("I didn't catch that. What did you say?\n")              
    if text["error"]:
        print("ERROR: {}".format(text["error"]))

    playsound('./mp3/Say the Advice.mp3')
    text = recognize_speech_from_mic(recognizer,microphone)
    d["Advice"] = text["transcription"]
    if not text["Success"]:
        print("I didn't catch that. What did you say?\n")              
    if text["error"]:
        print("ERROR: {}".format(text["error"]))

    d['Dname'] = sys.argv[1]
    
    with open('sample.json','w') as fp:
        json.dump(d,fp)  
print('Success')
