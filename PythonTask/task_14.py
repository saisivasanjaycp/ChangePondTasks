import requests,random

url=input('paste the link here: ')
def scrap(img):
    res=requests.get(img)
    
    with open(f'{random.randint(999,99999)}.jpg','wb') as fw:
        fw.write(res.content)

scrap(url)

