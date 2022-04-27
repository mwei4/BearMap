import requests
import json
response = requests.get(
    "https://classes.cornell.edu/api/2.0/search/classes.json?roster=WI22&subject=ECON")
data = json.loads(response.text)["data"]["classes"]
title = "titleLong"
for i in range(len(data)):
    print(data[i]["description"])
# print(data[0]["subject"])

quote = '成功を収める人とは人が投げてきたレンガでしっかりした基盤を築くことができる人のことである。'

with open('quotes.txt', 'w', encoding='utf-8') as f:
    f.write(quote)
