import React, {useState, useEffect} from 'react'
import Nav from './components/nav/nav';
import axios from 'axios';
import { Outlet } from 'react-router-dom'

const AppContainer = (props) => {

    return(
        <>
            <Nav />
            <Outlet />

        </>
    )
}

export default AppContainer