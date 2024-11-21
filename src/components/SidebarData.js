import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TerminalIcon from '@mui/icons-material/Terminal';
import PersonIcon from '@mui/icons-material/Person';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export const SidebarData = {
    portrait_image: "../assets/images/potrait-image-example.jpg",
    pagelink: 
    [    {
            title:"Home",
            icon: <HomeIcon/>,
            link: "/home"
        },
        {
            title:"Projects",
            icon: <TerminalIcon/>,
            link: "/projects"
        },
        {
            title:"About",
            icon: <PersonIcon/>,
            link: "/about"
        },
    ],
    contactme: {
        title:"Contact me",
        linkedinIcon: <LinkedInIcon/>,
        linkedinLink: "",
        facebookIcon: <FacebookIcon/>,
        facebookLink: "",
        githubIcon : <GitHubIcon/>,
        githubLink: ""
    },
}