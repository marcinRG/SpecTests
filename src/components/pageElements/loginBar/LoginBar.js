import './LoginBar.scss';
import React from 'react';

export function LoginBar() {
    return (
        <React.Fragment>
            <div className="app-login-bar">
                <form className="app-login-form">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="button" value="Log in"/>
                </form>
            </div>
        </React.Fragment>
    )
}
