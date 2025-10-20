import { Button } from "@mui/material"

const DrawerBottom = ({

}) => {

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
                backgroundColor:"#4cb0a4",
                color:"white",
                margin:"0px 15px"
            }}
            onClick={null}
        >
            {"Save the Segment"}
        </Button>
        <Button
            style={{
                backgroundColor:"white",
                color:"red",
            }}
            onClick={null}
        >
            {"cancel"}
        </Button>
    </div>)
}

export default DrawerBottom;