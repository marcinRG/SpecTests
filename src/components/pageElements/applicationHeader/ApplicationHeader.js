import './ApplicationHeader.scss';
import React from 'react';
import {LinkList} from '../linkList/LinkList';

export function ApplicationHeader() {
  return (
      <React.Fragment>
          <header className="app-header">
              <nav className="app-navbar">
                  <h1 className="app-title">Spec app</h1>
                  <button className="menu-button"></button>
                  <ul className="app-main-menu">
                      <LinkList/>
                  </ul>
              </nav>
              <div className="app-jumbotron">
                  <h1 className="big-title">Make something valuable</h1>
                  <p className="app-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Necessitatibus nisi
                      unde voluptate. Doloribus explicabo id optio saepe veniam. Aperiam atque dicta expedita fugit
                      maxime
                      mollitia, sunt vitae. Atque consequatur, ducimus.</p>
                  <button className="rounded-button white">Get Started</button>
              </div>
          </header>
      </React.Fragment>
  )
}
