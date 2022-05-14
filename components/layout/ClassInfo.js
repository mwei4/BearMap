import React, { ReactNode } from 'react'
import json_data from "../../api_scrapper/scrapper/CS_SimplePre.json"
import post_data from "../../api_scrapper/scrapper/CS_SimplePosts.json"
import original_data from "../../api_scrapper/scrapper/CS_SP22.json"
import { getEventListeners } from 'stream'

let map = new Map()

const ClassInfo = ({ title }) => {

    let pre = json_data[title]
    let post = post_data[title]

    let classes = "Not a valid class for this semester!"
    let after = ""

    let name = ""
    let instructors = []
    let description = ""

    if (typeof (pre) != "undefined") {
        pre = pre.map(x => " " + x)
        classes = "Prereqs: " + pre
        instructors = original_data[title].instructors
        instructors = "Instructors: " + instructors.map(x => " " + x)
        name = original_data[title].class + " (" + original_data[title].name + "), Credits: " +
            original_data[title].credits
        description = original_data[title].description
        post = post.map(y => " " + y)
        after = "Unlocked: " + post
    }
    return (

        <><><><><><br /><div>{name}</div><br /><div>{classes}</div>
            <br /></><div>{after}</div><br></br></><div>{instructors}</div></></><br></br><div>{description}</div></>
    )
}



export default ClassInfo

