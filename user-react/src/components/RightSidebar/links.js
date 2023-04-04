import React from 'react';
import { NavLink } from 'react-router-dom';
import './links.css'
const Links = (props) => {
    return (
        <>
            <a className='a-style' href={props.url}>{props.name} </a>
        </>
    );
}

export default Links;
