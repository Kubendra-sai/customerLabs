import { Button } from "@mui/material";
import { DROPDOWN_LIST } from "../constants";
import CommonSelect from "./CommonSelect"
import { useState } from "react";

const DrawerDropDowns = () => {

    const [selectedOptions, setSelectedOptions] = useState([])
    const selectedOptionsValue = selectedOptions.map(obj => obj.Value)
    const [addSchemaOption, setAddSchemaOption] = useState(null)
    const availableOptions = DROPDOWN_LIST.filter(({Label, Value}) => {
        return !(selectedOptionsValue?.indexOf(Value) >= 0)
    })
    // availableOptions = [...availableOptions]
    console.log(selectedOptions,selectedOptionsValue,"selectedOptions",availableOptions)

    const onAddSchemaDropDownChange = (obj) => {
        if(selectedOptionsValue?.indexOf(obj.Value) >= 0){
            return
        }
        console.log(obj,"obj")
        // setSelectedOptions((prev) => {
        //     return [...prev, obj]
        // })
        setAddSchemaOption({...obj})
    }
    const onAddNewSchema = () =>{
        setSelectedOptions((prev) => {
            return [...prev, addSchemaOption]
        })
        setAddSchemaOption(null)
    }

    return (
        <div>
            <div
                style={{
                    border:"1px solid blue",
                    marginBottom:"25px",
                }}
            >
                {/* <CommonSelect 
                    options = {DROPDOWN_LIST}
                    value = {""}
                /> */}
                {selectedOptions.map(({Label, Value})=>{
                    return <div>{Label}</div>
                })}
            </div>
            <div
                style={{
                    borderBottom:"25px",
                }}
            >
                <CommonSelect 
                    options = {availableOptions}
                    value = {""}
                    onChange = {
                        (obj) => onAddSchemaDropDownChange(obj)
                    }
                />
            </div>
            <div
                style={{
                    borderBottom:"25px",
                }}
            >
                <Button
                    onClick={onAddNewSchema}
                >
                    {"+ Add new schema"}
                </Button>
            </div>
        </div>
    )
}

export default DrawerDropDowns;