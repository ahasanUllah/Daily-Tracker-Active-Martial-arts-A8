import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Nav = () => {
   return (
      <div>
         <div className="navbar bg-base-100 bg-primary">
            <a href="/" className="btn btn-ghost normal-case text-xl text-white mx-auto">
               <FontAwesomeIcon icon={faHandFist} className="text-4xl text-white mr-5"></FontAwesomeIcon> Active Martial
               Arts
            </a>
         </div>
      </div>
   );
};

export default Nav;
