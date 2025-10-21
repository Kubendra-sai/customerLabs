import { Button } from "@mui/material";
import CommonSelect from "./CommonSelect"
import { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import { useDrawerContext } from "../context/DrawerContext";

const DrawerDropDowns = () => {

    // const [selectedOptions, setSelectedOptions] = useState([])
    // const selectedOptionsValue = selectedOptions.map(obj => obj.Value)
    // const [addSchemaOption, setAddSchemaOption] = useState(null)
    // const availableOptions = DROPDOWN_LIST.filter(({Label, Value}) => {
    //     return !(selectedOptionsValue?.indexOf(Value) >= 0)
    // })
    // availableOptions = [...availableOptions]

    const {
        state:{
            selectedOptions,
            selectedOptionsValue,
        },
        setState:{
            setSelectedOptions,
            setAddSchemaOption,
        },
        values:{
            availableOptions,
            addSchemaOption,
        }
    } = useDrawerContext()

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
        if(!addSchemaOption) return
        setSelectedOptions((prev) => {
            return [...prev, addSchemaOption]
        })
        setAddSchemaOption(null)
    }

    const onDropDownListValuesChange = (obj, index) => {
        return (object) => {
            let newList = []
            // For to retrieve the previous position
            for(let i=0;i<selectedOptions?.length;i++){
                if(index === i){
                    newList.push(object)
                }else{
                    newList.push(selectedOptions[i])
                }
            }
            setSelectedOptions(newList)
        }
    }

    const onRemoveDropDown = (Value) => () => {
        console.log(Value,"value")
        setSelectedOptions(
            (prev) => [...prev].filter(
                (obj) => obj.Value !== Value
            )
        )
    }

    return (
        <div>
            {!!selectedOptions?.length &&
                <div
                    style={{
                        border:"1px solid blue",
                        marginBottom:"10px",
                    }}
                >
                    {/* <CommonSelect 
                        options = {DROPDOWN_LIST}
                        value = {""}
                    /> */}
                    {selectedOptions.map((obj, index)=>{

                        let {Label, Value} = obj
                        let modifiedOptions = [ obj, ...availableOptions?.filter(
                            (obj) => {
                                return obj.Value; // && obj.Value !== Value
                            }
                        )]

                        return (
                            <div
                                style={{
                                    marginBottom:"10px",
                                    padding:"10px",
                                    display:"flex",
                                    justifyContent:"center",
                                }}
                            >
                                <CommonSelect 
                                    options = {modifiedOptions}
                                    value = {Value}
                                    onChange = {onDropDownListValuesChange(obj, index)}
                                />
                                <Button
                                    onClick={onRemoveDropDown(Value)}
                                >
                                    <RemoveIcon />
                                </Button>
                            </div>
                        )
                    })}
                </div>
            }
            <div
                style={{
                    marginBottom:"10px",
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
                    marginBottom:"10px",
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