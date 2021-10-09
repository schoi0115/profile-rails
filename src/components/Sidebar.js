import React from 'react'
import {AiOutlineHome} from "react-icons/ai";
import {BsFilePerson} from "react-icons/bs";

import {BiRun} from "react-icons/bi";
import {MdWorkOutline} from "react-icons/md";


export const  Sidebar = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'Who is Shawn?',
        path: '/page1',
        icon: <BsFilePerson />,
        cName: 'nav-text',
    },
    {
        title: 'What is he like?',
        path: '/page2',
        icon: <MdWorkOutline />,
        cName: 'nav-text',
    },
    {
        title: 'Applications',
        path: '/page3',
        icon: <BiRun />,
        cName: 'nav-text',
    },
    {
        title: 'Resume',
        path: '/page4',
        icon: <BiRun />,
        cName: 'nav-text',
    },
    {
        title: 'Contact info',
        path: '/page5',
        icon: <BiRun />,
        cName: 'nav-text',
    },


]

