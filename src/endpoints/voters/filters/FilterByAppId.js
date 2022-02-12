
import { useEffect, useState } from "react";
import { SelectInput, useListContext } from "react-admin";
import {httpClient} from '../../../api'

/***
 *
filterValues: Value of the filters based on the URI, e.g. {"commentable":true,"q":"lorem "}
setFilters(): Callback to set the filter values, e.g. setFilters({"commentable":true})
displayedFilters: Names of the filters displayed in the form, e.g. ['commentable','title']
showFilter(): Callback to display an additional filter in the form, e.g. showFilter('views')
hideFilter(): Callback to hide a filter in the form, e.g. hideFilter('title')

 */

const FilterByAppId = (props) => {

    const {showFilter} = useListContext()
    const [options, setOptions] = useState([])

    useEffect(()=>{
        httpClient("apps").then(response => response.json).then(json => {
            if(json && "data" in json && Array.isArray(json.data)){
                setOptions(
                    json.data.map(item => ({
                        id: item.linkedin_client_id,
                        name: `${item.min_created_at.substring(0, 7)} - ${item.max_created_at.substring(0, 7)} (${item.votes})`
                    }))
                )
            }
        })
    },[])

    return (<SelectInput {...props} choices={options}></SelectInput>)

}

export default FilterByAppId