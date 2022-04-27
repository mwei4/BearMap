import requests
import json

url = "https://classes.cornell.edu/api/2.0/search/classes.json?roster=WI22&subject=ECON"
response = requests.get(url)
data = json.loads(response.text)["data"]["classes"]
file_name = url[url.find("subject=")+8:] + "_" + \
    url[url.find("roster=")+7:url.find("roster=") + 11] + ".txt"
with open(file_name, 'w', encoding='utf-8') as f:
    for i in range(len(data)):
        f.write(data[i]["titleLong"] + "\n")
        f.write(data[i]["description"] + "\n")
        # if data[i]["enrollGroups"]["classSections"]["notes"]["unitsMinimum"] != data[i]["enrollGroups"]["classSections"]["notes"]["unitsMaximum"]:
        #     f.write("Credits: " + data[i]["enrollGroups"]["classSections"]["notes"]["unitsMinimum"] +
        #           "-" + data[i]["enrollGroups"]["classSections"]["notes"]["unitsMaximum"])
        # else:
        #     f.write("Credits: " + data[i]["enrollGroups"]
        #           ["classSections"]["unitsMinimum"] + "\n")
        f.write("Semesters Offered: " + data[i]["catalogWhenOffered"] + "\n")
        if data[i]["catalogPrereqCoreq"] == "":
            f.write("Pre/Corequisites: None")
        else:
            f.write("Pre/Corequisites: " + data[i]["catalogPrereqCoreq"])
        f.write("\n\n")
