import { useState } from "react";
import DrawerDropDowns from "./DrawerDropDowns";

const DrawerBody = ({

}) => {
    const [segmentName, setSegmentName] = useState("")

    return (<div
        style={{
            height:"auto",
            // backgroundColor:"yellow",
            flexGrow:"1",
            padding:"20px",
        }}
    >
        <p>
            {"Enter the Name of the Segment"}
        </p>
        <div>
            <input 
                placeholder={"Name of the Segment"}
                style={{
                    width:"400px",
                    padding:"10px",

                }}
                value={segmentName}
                onChange={(e)=>setSegmentName(e.target.value)}
            />
        </div>
        <p>
            {"to save your segment, you need to add the schemas to build the query"}
        </p>
        <DrawerDropDowns />
    </div>)
}

export default DrawerBody;