import json

with open('CS_SP22_PreReq.json') as json_file:
    data = json.load(json_file)

out = {}
for elem in data:
    out[data[elem]['class']] = data[elem]["pre_coreq lst"]

with open("CS_SimplePre.json", "w") as f:
    json.dump(out, f)
