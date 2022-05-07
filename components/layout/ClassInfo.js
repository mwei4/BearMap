import React, {ReactNode} from 'react'
import json_data from "../../api_scrapper/scrapper/CS_SimplePre.json"
import post_data from "../../api_scrapper/scrapper/CS_SimplePosts.json"

let map = new Map()

const ClassInfo = ({title}) => {
    let classes = "Prereqs: " + json_data[title]
    let after = "Unlocked: " + post_data[title]

    if (typeof(classes) == 'undefined') {
        classes = "Not a valid class for this semester!"
    }
    else if (classes.length == 0) {
        classes = "No Prereqs!"
    }
    if (typeof(after) == 'undefined') {
        after = ""
    }
    else if (after.length == 0) {
        after = "Nothing Unlocked"
    }

    return (
        
        <><div>{classes}</div><br></br><div>{after}</div></>
    )
}

export default ClassInfo