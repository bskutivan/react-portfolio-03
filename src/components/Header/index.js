import React from 'react';
import Nav from '../Nav'

function Header(props) {

    return(
        <header>
            <h1>Brandon Kutivan</h1>
            <div>
                <Nav
                handlePageChange = {props.handlePageChange}
                currentPage = {props.currentPage}
                />
            </div>
        </header>
    )
};


export default Header;