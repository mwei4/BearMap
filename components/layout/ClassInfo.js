import React, {ReactNode} from 'react'
import json_data from "../../api_scrapper/scrapper/CS_SimplePre.json"
import post_data from "../../api_scrapper/scrapper/CS_SimplePosts.json"

let map = new Map()

const ClassInfo = ({title}) => {

    let pre = json_data[title]
    let post = post_data[title]

    let classes = "Prereqs: " + pre
    let after = "Unlocked: " + post

    if (typeof(pre) == 'undefined') {
        classes = "Not a valid class for this semester!"
    }
    else if (pre.length == 0) {
        classes = "No Prereqs!"
    }
    if (typeof(post) == 'undefined') {
        after = ""
    }
    else if (post.length == 0) {
        after = "Nothing Unlocked"
    }

    return (
        
        <><div>{classes}</div><br></br><div>{after}</div></>
    )
}

export default ClassInfo