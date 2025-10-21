import React, { useState } from "react";
import { DROPDOWN_LIST } from "../constants";
import DrawerContext from "./DrawerContext"

const DrawerProvider = ({children, ...props}) => { //...props

    const [openDrawer, setOpenDrawer] = useState(false) 
    const [segmentName, setSegmentName] = useState("")
    const [selectedOptions, setSelectedOptions] = useState([])
    const selectedOptionsValue = selectedOptions.map(obj => obj.Value)
    const [addSchemaOption, setAddSchemaOption] = useState(null)
    const availableOptions = DROPDOWN_LIST.filter(({Label, Value}) => {
        return !(selectedOptionsValue?.indexOf(Value) >= 0)
    })
    const [saveLoading, setSaveLoading] = useState(false)
    const resetDrawerStates = () => {
        setSegmentName("")
        setSelectedOptions([])
        setAddSchemaOption(null)
    }

    let value = {
        state:{
            segmentName,
            selectedOptions,
            selectedOptionsValue,
            openDrawer,
            saveLoading
        },
        setState:{
            setSegmentName,
            setSelectedOptions,
            setAddSchemaOption,
            setOpenDrawer,
            setSaveLoading
        },
        values:{
            availableOptions,
            addSchemaOption,
        },
        callBacks:{
           resetDrawerStates,  
        },
    }

    return <DrawerContext.Provider 
        value={value}
        {...props}
    >
        {children}
    </DrawerContext.Provider>
}

export default DrawerProvider