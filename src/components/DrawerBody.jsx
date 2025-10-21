import { useContext, useState } from "react";
import DrawerDropDowns from "./DrawerDropDowns";
import DrawerContext, {useDrawerContext} from "../context/DrawerContext";

const DrawerBody = ({

}) => {

    const {
        state:{
            segmentName
        },
        setState:{
            setSegmentName,
        }
    } = useDrawerContext() //useDrawerContext() //useContext(DrawerContext)

    console.log(segmentName,"segmentName")
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
            <span
                style={{
                    color:"red",
                }}
            >{"*"}</span>
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
            <span
                style={{
                    color:"red",
                }}
            >{"*"}</span>
        </p>
        <DrawerDropDowns />
    </div>)
}

export default DrawerBody;