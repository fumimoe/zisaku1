import React from 'react'
import styles from './Header.module.scss';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const Header:React.FC = () => {
    
    return (
        
        <div className={styles.root}>
      <AppBar position="static" className={styles.app_bar}>
        <Toolbar>
          <Button >Login</Button>
          <IconButton  className={styles.menu_icon}  >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
    </div>
    )
}

export default Header
