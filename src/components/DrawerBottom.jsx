import { Button, CircularProgress } from "@mui/material"
import { useDrawerContext } from "../context/DrawerContext";
import { saveSegmentApi } from "../api";

const DrawerBottom = ({

}) => {

    const {
        state:{
            segmentName,
            selectedOptions,
            selectedOptionsValue,
            saveLoading,
        },
        setState:{
            setSegmentName,
            setSelectedOptions,
            setAddSchemaOption,
            setOpenDrawer,
            setSaveLoading,
        },
        values:{
            availableOptions,
            addSchemaOption,
        },
        callBacks:{
           resetDrawerStates,  
        }
    } = useDrawerContext()

    const enableButton = !!segmentName?.trim()?.length 
                        && !!selectedOptions?.length

    const saveSegment = async() => {
        if(!enableButton) return
        let modifiedOptionsList = selectedOptions?.map(
            ({Label, Value}) => ({[Value]:Label})
        )
        let apiBody =  {
            "segment_name": segmentName?.trim(),
            "schema": modifiedOptionsList,
        }

        setSaveLoading(true)
        try{
            let res = await saveSegmentApi(apiBody)
            resetDrawerStates()
        }catch(e){
            console.log(e, "save segement error")
        }finally{
           setSaveLoading(false) 
        }
        
    }

    return (<div
        style={{
            // alignItems:"center",
            backgroundColor:"#ebeff0",
            color:"white",
            height:"75px",
            display:"flex",
            alignItems:"center",
            paddingLeft:"20px",
            fontWeight:"bold",
            // width:"100%",
            position:"absolute",
            bottom:"0",
            left:"0",
            right:"0",
        }}
    >
        <Button
            style={{ 
                backgroundColor:enableButton?"#4cb0a4":"grey",
                color:"white",
                margin:"0px 15px"
            }}
            onClick={()=>saveSegment()}
            disabled={!enableButton}
        >
            {saveLoading &&
                <CircularProgress size="30px" />
            }
            {"Save the Segment"}
        </Button>
        <Button
            style={{
                backgroundColor:"white",
                color:"red",
            }}
            onClick={()=>setOpenDrawer(false)}
        >
            {"cancel"}
        </Button>
    </div>)
}

export default DrawerBottom;