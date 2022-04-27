import requests
import json

url = "https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA22&subject=CS"
response = requests.get(url)
data = json.loads(response.text)["data"]["classes"]

# [file_name] is parsed from [semester] and [subject] in form [subject_semester]
file_name = url[url.find("subject=")+8:] + "_" + \
    url[url.find("roster=")+7:url.find("roster=") + 11] + ".txt"
with open(file_name, 'w', encoding='utf-8') as f:
    for i in range(len(data)):
        # [titleLong] is course name
        f.write(data[i]["titleLong"] + "\n")
        # [description] is course description
        f.write((data[i]["description"] if data[i]["description"]
                is not None else "No Description") + "\n")
        # [if-else] clause for course credit count
        # [if] clause checks if min and max credit units are different
        if data[i]["enrollGroups"][0]["unitsMinimum"] != data[i]["enrollGroups"][0]["unitsMaximum"]:
            f.write("Credits: " + str(data[i]["enrollGroups"][0]["unitsMinimum"]) +
                    "-" + str(data[i]["enrollGroups"][0]["unitsMaximum"]) + "\n")
        else:
            f.write("Credits: " + str(data[i]["enrollGroups"]
                    [0]["unitsMinimum"]) + "\n")
        # [catalogWhenOffered] is the semesters in which course is offered
        sem_offered = data[i]["catalogWhenOffered"]
        f.write("Semesters Offered: " +
                (sem_offered if sem_offered is not None else "None") + "\n")
        # [catalogPrereqCoreq] lists the pre- and co-reqs of a course
        if data[i]["catalogPrereqCoreq"] == "":
            f.write("Pre/Corequisites: None" + "\n")
        else:
            pre_coreqs = data[i]["catalogPrereqCoreq"]
            f.write("Pre/Corequisites: " +
                    (pre_coreqs if pre_coreqs is not None else "None") + "\n")
        # [firstName] + [lastName] lists all instructors by order of [firstName lastName]
        instructors = data[i]["enrollGroups"][0]["classSections"][0]["meetings"][0]["instructors"]
        f.write("Instructors: ")
        for i in range(len(instructors)):
            if i != 0:
                f.write(", ")
            f.write(instructors[i]["firstName"] +
                    " " + instructors[i]["lastName"])
        f.write("\n\n")

# for i in range(len(data["enrollGroups"])):
#     print(data["enrollGroups"][i])
# print(data["enrollGroups"][0]["classSections"]["classNbr"])
