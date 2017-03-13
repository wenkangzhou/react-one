import React from 'react'
import {IndexLink,Link} from 'react-router'
import './Footer.scss'

export const Footer = () => ( 
    <footer id="footerbar">
        < IndexLink to = '/'
        className = 'footer-item' >
        首页 < /IndexLink>
        < Link to = '/counter'
        className = 'footer-item' >
        阅读 < /Link> 
        < Link to = '/zen'
        className = 'footer-item' >
        音乐 < /Link>
    < /footer>
)

export default Footer