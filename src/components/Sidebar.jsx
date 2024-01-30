import { Box, List } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { AccountBox, Article, Group, ModeNight, Person, Settings } from '@mui/icons-material';
import CustomListItem from './CustomListItem';

const Sidebar = ({ mode, setMode }) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position={'fixed'}>
                <List>
                    <CustomListItem Icon={HomeIcon} text='Homepage' button={{ component: 'a', href: '#' }} />
                    <CustomListItem Icon={Article} text='Pages' button={{ component: 'a', href: '#' }} />
                    <CustomListItem Icon={Group} text='Groups' button={{ component: 'a', href: '#' }} />
                    <CustomListItem Icon={StorefrontIcon} text='Marketplace' button={{ component: 'a', href: '#' }} />
                    <CustomListItem Icon={Person} text='Friends' button={{ component: 'a', href: '#' }} />
                    <CustomListItem Icon={Settings} text='Settings' button={{ component: 'a', href: '#' }} />
                    <CustomListItem Icon={AccountBox} text='Profile' button={{ component: 'a', href: '#' }} />
                    <CustomListItem Icon={ModeNight} isSwitch={true} onChange={e => setMode(mode === 'light' ? 'dark' : 'light')} button={{ component: 'a', href: '#' }} />
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar