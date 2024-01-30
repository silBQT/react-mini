import React, { useState } from 'react'
import { MoreVert, Share } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'

const Post = () => {
    const [isLike, setLike] = useState(false);

    return (
        <Card sx={{ marginBottom: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://vsegda-pomnim.com/uploads/posts/2022-04/1650937497_57-vsegda-pomnim-com-p-gori-yaponii-foto-60.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={() => { isLike ? setLike(false) : setLike(true) }} aria-label="add to favorites">
                    {
                        isLike
                            ? <FavoriteIcon sx={{ color: 'red' }} />
                            : <FavoriteBorderIcon />
                    }
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post