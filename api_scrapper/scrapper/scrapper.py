import requests
import json

sem = "SP22"
subject = "CS"
url = "https://classes.cornell.edu/api/2.0/search/classes.json?roster=" + \
    sem + "&subject=" + subject
response = requests.get(url)
data = json.loads(response.text)["data"]["classes"]

# [file_name] is parsed from [semester] and [subject] in form [subject_semester]
file_name = url[url.find("subject=")+8:] + "_" + \
    url[url.find("roster=")+7:url.find("roster=") + 11] + ".txt"
with open(file_name, 'w', encoding='utf-8') as f:
    for i in range(len(data)):
        # [titleLong] is course name, [subject] is subject, [catalogNbr] is
        # course number in form [subject catalogNbr: titleLong]
        f.write(data[i]['subject'] + " " + data[i]
                ['catalogNbr'] + ": " + data[i]["titleLong"] + "\n")
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
            if pre_coreqs is None:
                f.write("Pre/Corequisites: None")
            else:
                # [sep_pre_coreqs] separates each pre/coreq string based on [.]
                sep_pre_coreqs = [x for x in map(
                    str.strip, pre_coreqs.split('. ')) if x]
                for i in range(len(sep_pre_coreqs)):
                    f.write(sep_pre_coreqs[i] + "\n")

        # [firstName] + [lastName] lists all instructors by order of [firstName lastName]
        instructors = data[i]["enrollGroups"][0]["classSections"][0]["meetings"][0]["instructors"]
        f.write("Instructors: ")
        for j in range(len(instructors)):
            if j != 0:
                f.write(", ")
            f.write(instructors[j]["firstName"] +
                    " " + instructors[j]["lastName"])
        f.write("\n")
        f.write("Crosslisted Courses: ")
        # scrape crosslisted courses
        crosslisted_courses = data[i]["enrollGroups"][0]["simpleCombinations"]
        if len(crosslisted_courses) == 0:
            f.write("None")
        else:
            for j in range(len(crosslisted_courses)):
                if j != 0:
                    f.write(", ")
                f.write(crosslisted_courses[j]["subject"] +
                        " " + crosslisted_courses[j]["catalogNbr"])
        f.write("\n\n")

# for i in range(len(data["enrollGroups"])):
#     print(data["enrollGroups"][i])
# print(data["enrollGroups"][0]["classSections"]["classNbr"])
