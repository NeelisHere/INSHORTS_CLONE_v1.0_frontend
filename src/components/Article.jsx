import { Card, CardContent, Grid, Typography, styled } from '@mui/material'
import React from 'react'

const Image = styled('img')({
    height: 268,
    width: '88%',
    objectFit: 'cover'
})

const card_styles = {
    marginBottom: '20px'
}

const card_content_styles = {
    padding: '8px',
    paddingBottom:'4px !important'
}

const text_styles_1 = {
    fontWeight: '500px',
    fontSize: '24px',
    color: '#44444d',
    lineHeight: '27px',
}

const grid_styles = {
    margin: '10px 0 0 -25px'
}

const author_styles = {
    color: '#808290',
    fontSize: '12px',
    lineHeight: '22px',
    marginTop: '5px'
}

const desc_styles = {
    lineHeight: '20px',
    marginTop: '10px'
}

const publisher_styles = {
    fontSize: '12px',
    marginTop: '10px'
}

const Article = ({ data }) => {
    const { url, title, author, timestamp, description, link, publisher } = data
    console.log(data)
    return (
        <Card sx={card_styles}>
            <CardContent sx={card_content_styles}>
                <Grid container>
                    <Grid lg={5} md={5} sm={5} xs={12} item>
                        <Image src={url} alt={'image'} />
                    </Grid>
                    <Grid sx={grid_styles} lg={7} md={7} sm={7} xs={12} item>
                        <Typography sx={text_styles_1}>
                            {title}
                        </Typography>
                        <Typography sx={author_styles}>
                            <b>Short</b> by {author} / { new Date(timestamp).toDateString() }
                        </Typography>
                        <Typography sx={ desc_styles }>{description}</Typography>
                        <Typography sx={ publisher_styles }>
                            Read more at: <a href={link}>{publisher}</a>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Article
