import json
import sys
import string


all_letters= string.ascii_letters 
	
# keynew = sys.argv[0]
dict1 = {} 
#key = 4

def encrypt(plaintext , key) :

    for i in range(len(all_letters)): 
        dict1[all_letters[i]] = all_letters[(i+key)%len(all_letters)] 


    plain_txt = plaintext
    cipher_txt = [] 

    # loop to generate ciphertext 

    for char in plain_txt: 
        if char in all_letters: 
            temp = dict1[char] 
            cipher_txt.append(temp) 
        else: 
            temp =char 
            cipher_txt.append(temp) 
            
    cipher_txt= "".join(cipher_txt) 
    # print("Cipher Text is: ",cipher_txt) 
    return cipher_txt

def decrypt(cipher_txt , key) :
	
    dict2 = {}	 
    for i in range(len(all_letters)): 
        dict2[all_letters[i]] = all_letters[(i-key)%(len(all_letters))] 
        
    # loop to recover plain text 
    decrypt_txt = [] 

    for char in cipher_txt: 
        if char in all_letters: 
            temp = dict2[char] 
            decrypt_txt.append(temp) 
        else: 
            temp = char 
            decrypt_txt.append(temp) 
            
    decrypt_txt = "".join(decrypt_txt) 
    return decrypt_txt



with open('./sample.json') as f :
    data = json.load(f)

#print(sys.argv[1])
final = encrypt(data['Name'], sys.argv[1])

print(final)