import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import { DateRange, EmojiEmotions, Image, PersonAdd, Send, VideoCameraBack } from '@mui/icons-material';

const StyledTooltip = styled(Tooltip)(({ theme }) => ({
    position: 'fixed',
    bottom: 30,
    left: 30,
    [theme.breakpoints.down('md')]: {
        left: '50%',
        translate: '-50%'
    }
}))
const StyledModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const Add = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledTooltip title="Add" onClick={e => setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </StyledTooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={600} height={400} p={2} bgcolor={'background.default'} color={'text.primary'} borderRadius={5}>
                    <Typography mb={2} variant='h6' textAlign={'center'}>Create a post</Typography>
                    <Stack mb={2} direction={'row'} alignItems={'center'} gap={2}>
                        <Avatar src='https://yastatic.net/naydex/yandex-search/srn8PN571/311aa605zC/i5ZOil48q-7Y8j6UuHSedneURgo0MOgRnzUgFPpVEX6J5IeDpXuWZmNHQ_qBDBRQqsYGTEswsv4WJ1QHOZ_Vk5zBCcYdf7S2i7Eo2fRzl3Jo31tCNHf0Q5QiO0auFRx2gODW6skJ5RxfbHCKp3VqHqrNARhVLKLuLEw' />
                        <Typography variant='span'>silBQT</Typography>
                    </Stack>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={5}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack my={3} direction={'row'} gap={1}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup fullWidth='100%' variant="contained" aria-label="outlined button group">
                        <Button endIcon={<Send />}>Post</Button>
                        <Button sx={{ width: '100px' }}><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add