
const DrawerTitle = ({
    title = "title"
}) => {
    return <div
        style={{
            // alignItems:"center",
            backgroundColor:"#408c97ff",
            color:"white",
            height:"75px",
            display:"flex",
            alignItems:"center",
            paddingLeft:"20px",
            fontWeight:"bold",
        }}
    >
        <span
         style={{
            margin:"0px 15px",
         }}
        >{"<"}</span>
        {title}
    </div>
}

export default DrawerTitle;