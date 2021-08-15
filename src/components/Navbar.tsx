import React, { Fragment, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MenuConfig, MenuItem } from './MenuConfig';
import { IUser } from '../interfaces/profile';
import './Navbar.css';
import { IconContext } from 'react-icons';

interface IProps {
    user: IUser
}

const Navbar: React.FC<IProps> = ({ user }) => {
  const [sidebar, setSidebar] = useState(true);

  const showHideSidebar = () => setSidebar(!sidebar);

  return (
    <Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showHideSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showHideSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="profil-avatar">
              <div className="avatar">
                <div className="avatar__img">
                  <img src="https://picsum.photos/70" alt="avatar" />
                </div>
                <div className="avatar__name">{user.name}</div>
                <small className="small-text">{user.email}</small>
              </div>
            </li>
            {MenuConfig.map((item: MenuItem, index: number) => {
              return (
                <li key={index} className={item.getCName()}>
                  <Link to={item.getPath()}>
                    {item.getIcon()}
                    <span>{item.getTitle()}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </Fragment>
  );
}

export default Navbar;
