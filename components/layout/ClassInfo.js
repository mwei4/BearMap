import React, {ReactNode} from 'react'
import json_data from "../../api_scrapper/scrapper/CS_SimplePre.json"

let map = new Map()

const ClassInfo = ({title}) => {
    let classes = json_data[title]
    if (typeof(classes) == 'undefined') {
        classes = "Not a valid class for this semester!"
    }
    else if (classes.length == 0) {
        classes = "No Prereqs!"
    }

    return (
        
        <div>{classes}</div>
    )
}

export default ClassInfo