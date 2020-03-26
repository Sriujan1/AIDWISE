import json
import sys
import string


all_letters= string.ascii_letters 
all_num = string.digits
final = {}
dict1 = {}
num1 = {} 
name = ''

def encrypt(plaintext , key) :

    for i in range(len(all_letters)): 
        dict1[all_letters[i]] = all_letters[(i+key)%len(all_letters)] 
    for j in range(len(all_num)):
        num1[all_num[j]] = all_num[(j+key)%len(all_num)]

    plain_txt = plaintext
    cipher_txt = [] 

    for char in plain_txt: 
        if char in all_letters: 
            temp = dict1[char] 
            cipher_txt.append(temp)
        elif char in all_num:
            temp = num1[char]
            cipher_txt.append(temp) 
        else: 
            temp =char 
            cipher_txt.append(temp) 
            
    cipher_txt= "".join(cipher_txt) 
    return cipher_txt

def decrypt(cipher_txt , key) :
	
    dict2 = {}	 
    num2 = {}
    for i in range(len(all_letters)): 
        dict2[all_letters[i]] = all_letters[(i-key)%(len(all_letters))] 
    for j in range(len(all_num)):
        num2[all_num[j]] = all_num[(j-key)%len(all_num)]
    
    decrypt_txt = [] 

    for char in cipher_txt: 
        if char in all_letters: 
            temp = dict2[char] 
            decrypt_txt.append(temp) 
        elif char in all_num:
            temp = num2[char] 
            decrypt_txt.append(temp) 
        else: 
            temp = char 
            decrypt_txt.append(temp) 
            
    decrypt_txt = "".join(decrypt_txt) 
    return decrypt_txt


with open('./sample.json') as f :
    data = json.load(f)

for i in data:
    final[i] = encrypt(data[i], 4) #sys.argv[1])
keygen = encrypt('4',5)
final['key'] = keygen
name = './'+final['Name']+'.json'
with open(name , 'w') as f :
    json.dump(final,f)





# with open('./Wvmyner levmlev.json') as r :
#     data1 = json.load(r)

# result = {}
# keey = decrypt(data1['key'] , 5)
# for i in data:
#     result[i] = decrypt(data1[i] , int(keey))
# print(result)