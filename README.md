# BearMap
BearMap is a website that allows Cornell students to navigate through courses based on satisfied prerequisites. 

# Link
[BearMap](https://bear-map.vercel.app/) <br>
[GitHub Repo](https://github.com/mwei4/BearMap)

# Demo
### [Video](https://github.com/mwei4/BearMap/blob/main/Demo.mp4) <br>
To use, type a CS course such as `CS 2110` into the search bar of [/prereqs](https://bear-map.vercel.app/prereqs). <br>
Example output of querying `CS 2110`: <br><br>
![CS 2110](https://i.ibb.co/D9sVhT3/gries.png)
# May 13, 2022 Progress
Currently allows for only CS classes from SP22. 
## Bugs
1. Not all prereqs are scraped. For example, CS 4780 has some prereqs that weren't properly scrapped. <br>
2. Currently, all class numbers in the form `subject number` are scraped, such as `CS 2800` in the prereq description. This does not account for equivalent classes, such as if a course recommends `MATH 1910` or `MATH 1110`. Logically, a student would only have to satisfy one of these prereqs to take the class. Further work could be done to have these courses listed under the same bullet point for prereq coursework, but this would require a more advanced algorithm to scrape the prereq description.
## Future Add-Ons
1. Add all courses from all years. Currently limited to just CS courses in Spring 2022.
2. Add a button called `Add to Shopping Cart` for a given course in the `/prereqs` tab.
3. Have better prereq scraping as described in Bugs #2.
4. Implement Google Auth.
5. Have the `/shoppingcart` database check if an inputted course is valid. Database would only accept valid courses.
6. Allow for the user to click to the page of a mentioned course in the `Prereqs` or `Unlocked` course sections for a given course.
