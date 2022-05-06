import json

with open('CS_SimplePre.json') as json_file:
    data = json.load(json_file)

out = {}

for elem in data:
    course = elem
    lst = []
    for new_elem in data:
        if course in data[new_elem]:
            lst.append(new_elem)

    out[course] = lst

with open("CS_SimplePosts.json", "w") as f:
    json.dump(out, f)
