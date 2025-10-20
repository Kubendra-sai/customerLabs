import { Drawer } from "@mui/material";


export const CommonDrawer = ({
    children,
    anchor,
    open,
    onClose,
}) => {

    return <div>
        <Drawer
            anchor={anchor}
            open={open}
            onClose = {() => onClose()}
        >
            {children}
        </Drawer>
    </div>
}
