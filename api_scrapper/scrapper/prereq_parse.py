import requests
import json

sem = "SP22"
subject = "CS"
url = "https://classes.cornell.edu/api/2.0/search/classes.json?roster=" + \
    sem + "&subject=" + subject
response = requests.get(url)
data = json.loads(response.text)["data"]["classes"]
all_classes = {}


def prereq_parse(input):
    input = input.replace(",", "")
    input_lst = input.split(" ")
    course_lst = []
    for x in input_lst:
        if x.isdigit():
            loc = input_lst.index(x) - 1
            course_lst.append(input_lst[loc] + " " + x)

    for x in course_lst:
        if "/" in x:
            course_lst[course_lst.index(x)] = (x.partition('/')[2])
    for i in range(len(course_lst)):
        if "(" in course_lst[i]:
            course_lst[i] = course_lst[i].replace("(", "")
    return course_lst


# [file_name] is parsed from [semester] and [subject] in form [subject_semester]
file_name = url[url.find("subject=")+8:] + "_" + \
    url[url.find("roster=")+7:url.find("roster=") + 11] + "_PreReq.json"

for i in range(len(data)):
    # [titleLong] is course name, [subject] is subject, [catalogNbr] is
    # course number in form [subject catalogNbr: titleLong]
    current_class = {}
    current_class["class"] = data[i]['subject'] + \
        " " + data[i]['catalogNbr']
    # [catalogPrereqCoreq] lists the pre- and co-reqs of a course
    pre_coreqs = data[i]["catalogPrereqCoreq"].replace(
        "\u00a0", " ")
    current_class["pre_coreq"] = pre_coreqs
    prereq_lst = [x.replace("exempli gratia", "e.g.").strip() for x in pre_coreqs.replace(
        "e.g.", "exempli gratia").split(".")]
    while "" in prereq_lst:
        prereq_lst.remove("")
    # for x in prereq_lst:
    #     if not (x.startswith("Prerequisite") or x.startswith("Corequisite")):
    #         prereq_lst.remove(x)
    prereq_lst = list(filter(lambda x: x.startswith(
        "Prerequisite") or x.startswith("Corequisite"), prereq_lst))
    prereq_lst = prereq_parse(" ".join(prereq_lst))
    current_class["pre_coreq lst"] = prereq_lst
    all_classes[current_class["class"]] = current_class
with open(file_name, "w") as f:
    f.write(json.dumps(all_classes))
