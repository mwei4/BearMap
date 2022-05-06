import React, {ReactNode} from 'react'
import json_data from "../../api_scrapper/scrapper/CS_SP22_PreReq.json"

type Props = {
    children?: ReactNode
    title: string
  }


const ClassInfo = ({children, title: string}: Props) => {

    let classes: string[] = json_data["CS 2110"]['pre_coreq lst']
    return (
        
        <div>{classes}</div>
    )
}

export default ClassInfo