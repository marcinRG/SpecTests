import React from 'react';
import { Link } from 'react-router-dom';

export function LinkList() {
    return (
        <React.Fragment>
            <li className="menu-item"><Link to={'/'}>Home</Link></li>
            <li className="menu-item"><Link to={'/documents'}>Documents</Link></li>
            <li className="menu-item"><Link to={'/company-details'}>Company details</Link></li>
            <li className="menu-item"><Link to={'/clients'}>Clients</Link></li>
            <li className="menu-item"><Link to={'/items'}>Items</Link></li>
            <li className="menu-item"><Link to={'/other'}>Other tables</Link></li>
        </React.Fragment>
    );
}
