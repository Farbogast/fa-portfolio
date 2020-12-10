import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About Me',
    path: '/about',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <FaIcons.FaTools />,
    cName: 'nav-text'
  },
  {
    title: 'My works',
    path: '/works',
    icon: <AiIcons.AiOutlineFundProjectionScreen />,
    cName: 'nav-text'
  },
  {
    title: 'Contact me',
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
];