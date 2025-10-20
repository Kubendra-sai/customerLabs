import { 
  useState,
 } from 'react'

import './App.css'

import {
  CommonDrawer,
} from "./components"

import {
  Button,
} from '@mui/material';

import {
  SAVE_SEGMENT,
  DRAWER_OPENING_DIRECTION,
 } from './constants';

function App() {
  const [openDrawer, setOpenDrawer] = useState(false) 

  const toggleDrawer = ( value ) => {
    return () => setOpenDrawer(value)
  }

  return (
    <>
      <div>

        <Button
          onClick={toggleDrawer(true)}
        >
          {SAVE_SEGMENT}
        </Button>

        {openDrawer && 
          <CommonDrawer 
            open={open}
            onClose={toggleDrawer(false)}
            anchor={`${DRAWER_OPENING_DIRECTION}`}
          >
            {"test"}
          </CommonDrawer>
        }
        
      </div>
    </>
  )
}

export default App
