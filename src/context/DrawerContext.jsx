import { createContext, useContext } from "react";

const DrawerContext = createContext({})

export const useDrawerContext = () => useContext(DrawerContext)

export default DrawerContext