import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MobileDrawer = (props) => {
    const [ open, setOpen ] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
  return (
    <div className='md:hidden'>
        <IconButton onClick={handleOpen}>
            <MenuIcon />
        </IconButton>
        <Drawer anchor='right' open={open} onClose={handleClose}>
            <div className='flex flex-col p-2   '>
                <div className='flex justify-end'>
                    <IconButton variant="" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <p>Mobile Drawer</p>
            </div>
        </Drawer>
    </div>
)
}

export default MobileDrawer