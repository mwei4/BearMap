import json

with open('CS_SP22_PreReq.json') as json_file:
    data = json.load(json_file)

out = {}

for elem in data:
    course = elem
    print(course["pre_coreq"])
    lst = []
    for new_elem in data:
        if course in data[new_elem]["pre_coreq lst"]:
            lst.append(new_elem)

    out[course] = lst

with open("CS_SimplePosts.json", "w") as f:
    json.dump(out, f)
