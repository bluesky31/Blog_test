import json
import random

chars = "abcdefghijklmnopqrstuvwxyz"
word_len = 10
tags = ["first","second","third"]

def rand_word():
    word=""
    for i in range(random.randrange(1,word_len+1)):
        word+=chars[random.randrange(len(chars))]
    return word

def rand_paragraph(n):
    s=""
    for i in range(1,n+1):
        s+=" "+rand_word()
    return s[1:]

data = []

for i in range(50):
    data.append({})
    x=data[i]
    x["image"]="./circle.jpg"
    x["title"]=rand_paragraph(random.randrange(3,6))
    x["date"]=[random.randrange(1,30),random.randrange(1,13),
               random.randrange(2000,2020)]
    x["reading_time"]=random.randrange(1,10)
    x["tags"]=[]
    while not len(x["tags"]):
        for i in tags:
            if random.uniform(0,1)<0.5:
                 x["tags"].append(i)
    x["blog_content"]=rand_paragraph(random.randrange(5,800))

with open("data-entries.json","w") as f:
    json.dump(data,f)
