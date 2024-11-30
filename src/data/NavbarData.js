import React from 'react'
import TerminalIcon from '@mui/icons-material/Terminal';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export const NavbarData = {
    portrait_image: "../assets/images/potrait-image-example.jpg",
    pagelink: 
    [    
        {
            title:"About",
            icon: <PersonIcon/>,
            link: "/about"
        },
        {
            title:"Projects",
            icon: <TerminalIcon/>,
            link: "/projects"
        },
        {
            title:"Contact me",
            icon: <ContactsIcon/>,
            link: "/contact"
        },
    ],
    contactme:
    [
        {
            title:"Email",
            icon : <EmailIcon/>,
            link: "mailto:trhieu1247@gmail.com"
        },
        {
            title:"Linkedin",
            icon: <LinkedInIcon/>,
            link: "https://www.linkedin.com/in/trung-hieu-dang-b2bb35251/",
        },
        {
            title:"Facebook",
            icon: <FacebookIcon/>,
            link: "https://www.facebook.com/profile.php?id=100010932875992",
        },
        {
            title:"Github",
            icon : <GitHubIcon/>,
            link: "https://github.com/HieuDang3021"
        },
    ]
}