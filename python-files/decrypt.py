import json
import sys
import subs_algo as su
import os
import pymongo

id = sys.argv[1]
final = {}

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["AidWise"]
mycol = mydb["records"]

x = mycol.find_one({"Id":id})

newkey = su.decrypt(x['key'],5)
for i in x:
    if i=='Name' or i=='Symptoms' or i=='Diagnosis' or i=='Prescription' or i=='Advice':
        final[i] = su.decrypt(x[i], int(newkey))

print(final)