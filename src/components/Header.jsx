import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material' 
import { Menu } from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
    background: #fff;
`;

const MenuIcon = styled(Menu)`
    color: #333;
    cursor: pointer;
`;

const Image = styled('img')({
    height: 55,
    margin: 'auto',
    paddingRight: 70
})

const inshorts_logo_image_url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png'


const Header = () => {
  return (
    <StyledHeader position='static'>
        <Toolbar>
            <MenuIcon />
            <Image src={inshorts_logo_image_url} alt="inshorts-logo" />
        </Toolbar>
    </StyledHeader>
  )
}

export default Header
