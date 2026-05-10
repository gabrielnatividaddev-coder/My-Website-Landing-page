import React from 'react';
import JBDM from  '../../assets/javier.png';
import './header.css';
import { Button, Burger, Group, Drawer, ScrollArea, Divider, UnstyledButton,Center, Box, Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
const ImageStyleCSS = { 
  marginTop:'20px',
  verticalAlign: 'middle', 
  border: '5px solid #FFFFFF',
  filter: 'grayscale(25%)'
};
const CaptionStyleCSS = { 
  fontFamily:'Snell Roundhand, cursive', 
  fontWeight:'bold', 
  fontStyle: 'italic', 
  color: 'red', 
  textAlign:'center', 
  backgroundColor:'white'
};
const Header = ({showPicture}) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
 return <>
                   <Burger
                  opened={drawerOpened}
                  onClick={toggleDrawer}
                  hiddenFrom="sm"
                  aria-label="Toggle navigation"
                  ml={'20px'}
                  mt={'20px'}

              /> 
              
              <div className='header-navigator'>
           
              <Group className='fouritems' visibleFrom="sm">
                  <div className='navitemsmenu' style={{zIndex: 123}}>
                  <Link className='navitems itemsReact' to='/'>HOME</Link>
                  <Link className='navitems itemsReact' to='/about'>ABOUT</Link>
                  <Link className='navitems itemsReact' to='/services'>MY APPLICATIONS</Link>
                  <Link className='navitems itemsReact' to='/help'>LINKS</Link>
                </div>
                </Group>
                <div className='rightsection' >
                  {!showPicture && <Link className='profilepicture' to='/'>
                <img width="200" className='setimage' src={JBDM} style={ImageStyleCSS} ></img>
                <figcaption className='setimagecaption' style={CaptionStyleCSS} >Gabriel Natividad</figcaption>
                </Link> }
                </div>
              
  </div>  
        <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            padding="md"
            title="Navigation"
            hiddenFrom="sm"
            zIndex={1000000}
          >
            <ScrollArea h="calc(100vh - 80px" mx="-md">
                <Divider my="sm"/>
                      <Group className='divideritems'>
                      <Link className='itemdivider hovereffect' to='/'>HOME</Link>
                      <Link className='itemdivider hovereffect' to='/about'>ABOUT</Link>
                      <Link className='itemdivider hovereffect' to='/services'>MY APPLICATIONS</Link>
                      <Link className='itemdivider hovereffect' to='/help'>LINKS</Link>
                    </Group>
                <Divider my="sm" />
            </ScrollArea>
            </Drawer>
          
          </>
};


export default Header;
