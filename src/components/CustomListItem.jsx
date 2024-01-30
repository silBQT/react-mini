import { ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const CustomListItem = ({ Icon, text, button, isSwitch, onChange }) => {
    return (
        <ListItem disablePadding>
            <ListItemButton {...button}>
                <ListItemIcon>
                    {<Icon />}
                </ListItemIcon>
                {text && <ListItemText primary={text} />}
                {isSwitch && <Switch onChange={onChange} />}
            </ListItemButton>
        </ListItem>
    )
}

export default CustomListItem