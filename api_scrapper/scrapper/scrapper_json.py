import requests
import json

sem = "SP22"
subject = "CS"
url = "https://classes.cornell.edu/api/2.0/search/classes.json?roster=" + \
    sem + "&subject=" + subject
response = requests.get(url)
data = json.loads(response.text)["data"]["classes"]
all_classes = {}

# [file_name] is parsed from [semester] and [subject] in form [subject_semester]
file_name = url[url.find("subject=")+8:] + "_" + \
    url[url.find("roster=")+7:url.find("roster=") + 11] + ".json"

for i in range(len(data)):
    # [titleLong] is course name, [subject] is subject, [catalogNbr] is
    # course number in form [subject catalogNbr: titleLong]
    current_class = {}
    current_class["class"] = data[i]['subject'] + \
        " " + data[i]['catalogNbr']
    current_class["name"] = data[i]["titleLong"]
    # [description] is course description
    current_class["description"] = data[i]["description"]
    # [if-else] clause for course credit count
    # [if] clause checks if min and max credit units are different
    if data[i]["enrollGroups"][0]["unitsMinimum"] != data[i]["enrollGroups"][0]["unitsMaximum"]:
        current_class["credits"] = [data[i]["enrollGroups"][0]
                                    ["unitsMinimum"], data[i]["enrollGroups"][0]["unitsMaximum"]]
    else:
        current_class["credits"] = data[i]["enrollGroups"][0]["unitsMinimum"]
    # [catalogWhenOffered] is the semesters in which course is offered
    current_class["offered"] = data[i]["catalogWhenOffered"]
    # [catalogPrereqCoreq] lists the pre- and co-reqs of a course
    current_class["pre_coreq"] = data[i]["catalogPrereqCoreq"].replace(
        "\u00a0", " ")

    # # [firstName] + [lastName] lists all instructors by order of [firstName lastName]
    # instructors = data[i]["enrollGroups"][0]["classSections"][0]["meetings"][0]["instructors"]
    # f.write("Instructors: ")
    # for j in range(len(instructors)):
    #     if j != 0:
    #         f.write(", ")
    #     f.write(instructors[j]["firstName"] +
    #             " " + instructors[j]["lastName"])
    # f.write("\n")
    # f.write("Crosslisted Courses: ")
    # # scrape crosslisted courses
    # crosslisted_courses = data[i]["enrollGroups"][0]["simpleCombinations"]
    # if len(crosslisted_courses) == 0:
    #     f.write("None")
    # else:
    #     for j in range(len(crosslisted_courses)):
    #         if j != 0:
    #             f.write(", ")
    #         f.write(crosslisted_courses[j]["subject"] +
    #                 " " + crosslisted_courses[j]["catalogNbr"])
    # f.write("\n\n")
    all_classes[current_class["class"]] = current_class
with open(file_name, "w") as f:
    f.write(json.dumps(all_classes))
