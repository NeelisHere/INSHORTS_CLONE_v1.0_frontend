import React from 'react'
import { Box, Typography, styled } from '@mui/material';

const applestore_logo_image_url = `https://assets.inshorts.com/website_assets/images/appstore.png`
const googlestore_logo_image_url = `https://assets.inshorts.com/website_assets/images/playstore.png`
const BBC_quote = `"Those who do not read news, are uninformed. Those who do, are misinformed." - BBC`

const Container = styled(Box)`
    background: crimson;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    height: 48px;
    margin-bottom: 30px;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 300;
    margin-left: 50px;
`;

const Image = styled('img')({
    height: 34,
    '&:last-child':{
        margin: '0 50px 0 20px'
    }
})

const InfoHeader = () => {
  return (
    <Container>
      <Text>
        {BBC_quote}
      </Text>
      <Box style={{display: 'flex', marginLeft: 'auto'}}>
        <Image src={applestore_logo_image_url} alt="applestore_logo_image_url" />
        <Image src={googlestore_logo_image_url} alt="googlestore_logo_image_url" />
      </Box>
    </Container>
  )
}

export default InfoHeader
