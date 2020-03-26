import json
import sys
import subs_algo as su

name = ''
final = {}

with open('./sample.json') as f :
    data = json.load(f)

for i in data:
    final[i] = su.encrypt(data[i], int(sys.argv[1]))
keygen = su.encrypt(sys.argv[1],5)
final['key'] = keygen
name = './'+final['Name']+'.json'
fname = './json/'+name
# with open(fname , 'w') as f :
#     json.dump(final,f)

print(final)


# with open('./Wvmyner levmlev.json') as r :
#     data1 = json.load(r)

# result = {}
# keey = su.decrypt('0',5)
# print(keey)
# for i in data:
#     result[i] = decrypt(data1[i] , int(keey))
# print(result)