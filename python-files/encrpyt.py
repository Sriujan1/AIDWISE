import json
import sys
import subs_algo as su
import os
import pymongo
from pymongo import MongoClient
import random

psuedokey = random.randrange(1,100,1)
name = ''
final = {}

with open('./sample.json') as f :
    data = json.load(f)

final['Id'] = data['Id']

for i in data:
    if i!= 'Id':
        final[i] = su.encrypt(data[i], psuedokey) 
keygen = su.encrypt(psuedokey , 5)
 
final['key'] = keygen

client = MongoClient()
client = MongoClient('localhost',27017)

db = client.AidWise
records = db.records
records.insert_one(final)

os.remove("sample.json")

print("Success")
