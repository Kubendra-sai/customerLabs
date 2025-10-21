import React, { useState } from "react";
import { DROPDOWN_LIST } from "../constants";
import DrawerContext from "./DrawerContext"

const DrawerProvider = ({children, ...props}) => { //...props

    const [segmentName, setSegmentName] = useState("")
    const [selectedOptions, setSelectedOptions] = useState([])
    const selectedOptionsValue = selectedOptions.map(obj => obj.Value)
    const [addSchemaOption, setAddSchemaOption] = useState(null)
    const availableOptions = DROPDOWN_LIST.filter(({Label, Value}) => {
        return !(selectedOptionsValue?.indexOf(Value) >= 0)
    })


    let value = {
        state:{
            segmentName,
            selectedOptions,
            selectedOptionsValue,
        },
        setState:{
            setSegmentName,
            setSelectedOptions,
            setAddSchemaOption,
        },
        values:{
            availableOptions,
            addSchemaOption,
        }
    }

    return <DrawerContext.Provider 
        value={value}
        {...props}
    >
        {children}
    </DrawerContext.Provider>
}

export default DrawerProvider