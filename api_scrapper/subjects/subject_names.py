import requests
import json
import random

sem = "SP22"
url = "https://classes.cornell.edu/api/2.0/config/subjects.json?roster=" + sem
response = requests.get(url)
data = json.loads(response.text)["data"]["subjects"]

file_name = sem + "_Subjects.txt"

# [abbrev] is the list of subject abbreviations for the subjects offered in a given semester
abbrev = []

with open(file_name, 'w', encoding='utf-8') as f:
    f.write("Subjects for " + sem + ": \n")
    for i in range(len(data)):
        abbrev.append({"value": data[i]["value"],
                      "description": data[i]["descrformal"]})
        value_len = len(data[i]["value"])
        f.write(data[i]["value"] + (" " * (8 - value_len)) +
                data[i]["descrformal"] + "\n")
print(random.choice(abbrev))
