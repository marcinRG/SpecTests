import './ApplicationFooter.scss';
import React from 'react';

export function  ApplicationFooter() {
   return (
       <React.Fragment>
           <footer className="footer">
               <div className="footer-links">
                   <div className="links-div">
                       <h4 className="links-title">Company</h4>
                       <ul className="links-list">
                           <li><a href="#">Home</a></li>
                           <li><a href="#">About us</a></li>
                           <li><a href="#">Pricing</a></li>
                           <li><a href="#">Contact us</a></li>
                       </ul>
                   </div>

                   <div className="links-div">
                       <h4 className="links-title">Quick Links</h4>
                       <ul className="links-list">
                           <li><a href="#">Designers</a></li>
                           <li><a href="#">Pricing plan</a></li>
                           <li><a href="#">Services</a></li>
                           <li><a href="#">Download</a></li>
                       </ul>
                   </div>

                   <div className="links-div">
                       <h4 className="links-title">Conditions</h4>
                       <ul className="links-list">
                           <li><a href="#">Online support</a></li>
                           <li><a href="#">Privacy</a></li>
                           <li><a href="#">Terms</a></li>
                           <li><a href="#">Policy</a></li>
                       </ul>
                   </div>

                   <div className="links-div">
                       <h4 className="links-title">Get connected</h4>
                       <ul className="links-list circles">
                           <li><a className="link-circle" href="#"></a></li>
                           <li><a className="link-circle" href="#"></a></li>
                           <li><a className="link-circle" href="#"></a></li>
                       </ul>
                   </div>

               </div>
               <div className="footer-bottom">&copy; projectName 2016 Ibrahim emran</div>
           </footer>
       </React.Fragment>
   )
}
