import React from 'react';
import { Link } from 'react-router-dom';
import GAuth from '../api/GoogleAuth';

const Menu = () => {
    return (
        <div className="ui secundary pointing menu">
            <Link to="/" className="item">Home</Link>
            <div className="right menu">
                <Link to="/streams" className="item">All Streams</Link>
                <Link to="/streams" className="item"><GAuth /></Link>
            </div>
        </div>
    );
}

export default Menu;