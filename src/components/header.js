import React from 'react'
import {Link} from 'gatsby'
import {ThemeToggler} from 'gatsby-plugin-dark-mode'

import headerStyles from './header.module.scss'

// @TODO: REMOVE UNSED PAGES...

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link>
          </li>
          <li>
            <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link>
          </li>
          <li>
            <Link to="/gallery" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Gallery</Link>
          </li>
          <li className="toggle-input">
            <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label className="cursor-pointer">
                <i 
                  className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}
                  onClick={() => toggleTheme(theme === 'dark' ? 'dark' : 'light')} 
                ></i>
                <input
                  type="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                  
                /> {' '}
              </label>
            )}
          </ThemeToggler>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header