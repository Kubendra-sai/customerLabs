import DrawerTitle from "./DrawerTitle";
import DrawerBottom from "./DrawerBottom";
import {DRAWER_TITLE} from "../constants"
import DrawerBody from "./DrawerBody";

const Drawer = ({

}) => {

    return <div
        style={{
            height:"100%",
            display:"flex",
            flexDirection:"column",
        }}
    >
        <DrawerTitle title={DRAWER_TITLE}/>
        <DrawerBody/>
        <DrawerBottom />
    </div>
}

export default Drawer;