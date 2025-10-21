import { useState } from "react";


const CommonSelect = ({
    options,
    value = "",
    onChange,
    // defaultValue,
    style = {},
}) => {

    const [selectedvalue, setSelectedValue] = useState(value)

    const onSelectChange = (e) => {
        let value = e.target.value

        setSelectedValue(value)
        
        let label = options.find(
            obj => obj.Value === value
        )?.Label
        
        onChange({
            Label:label,
            Value:value,
        })
    }

    return(
        <select 
            value={selectedvalue}
            onChange={(e)=>onSelectChange(e)}
            style={{
                width:"300px",
                padding:"10px",
                ...style,
            }}
        >
            {options.map(({Label, Value}, i) =>{
                return <option
                    key={Label}
                    value={Value}
                    label={Label}
                >
                    {Label}
                </option>
            })}
        </select>
    )

}

export default CommonSelect