import { AcUnit, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})
const Search = styled('div')(({ theme }) => ({
    width: "40%",
    padding: '0 10px',
    backgroundColor: 'white',
    borderRadius: '10px'
}))
const Icons = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}))
const UserBox = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: 10,
    [theme.breakpoints.down('sm')]: {
        display: 'flex'
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position='sticky'>
            <StyledToolbar >
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
                    silBQT.github.io
                </Typography>
                <AcUnit sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search><InputBase sx={{ width: '100%' }} placeholder='Search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail color="white" />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications color="white" />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} onClick={e => setOpen(true)} src='https://yastatic.net/naydex/yandex-search/srn8PN571/311aa605zC/i5ZOil48q-7Y8j6UuHSedneURgo0MOgRnzUgFPpVEX6J5IeDpXuWZmNHQ_qBDBRQqsYGTEswsv4WJ1QHOZ_Vk5zBCcYdf7S2i7Eo2fRzl3Jo31tCNHf0Q5QiO0auFRx2gODW6skJ5RxfbHCKp3VqHqrNARhVLKLuLEw' />
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://yastatic.net/naydex/yandex-search/srn8PN571/311aa605zC/i5ZOil48q-7Y8j6UuHSedneURgo0MOgRnzUgFPpVEX6J5IeDpXuWZmNHQ_qBDBRQqsYGTEswsv4WJ1QHOZ_Vk5zBCcYdf7S2i7Eo2fRzl3Jo31tCNHf0Q5QiO0auFRx2gODW6skJ5RxfbHCKp3VqHqrNARhVLKLuLEw' />
                    <Typography variant='span'>Bakyt</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar