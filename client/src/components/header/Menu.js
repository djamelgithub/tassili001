import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Avatar from '../Avatar'
import NotifyModal from '../NotifyModal'

const Menu = () => {
    const navLinks = [
        { label: 'Home', icon: 'home', path: '/' },
     
        { label: 'Discover', icon: 'explore', path: '/discover' }
    ]

    const { auth, theme, notify } = useSelector(state => state)
    const dispatch = useDispatch()
    const { pathname } = useLocation()

    const isActive = (pn) => {
        if (pn === pathname) return 'active'
    }

    const userLink = () => {
        if (auth.user) { // Verificar si el usuario está autenticado
            return (
                <div className="menu">
                    <ul className="navbar-nav flex-row">
                        {/* Renderizar los enlaces de navegación */}
                        {
                            navLinks.map((link, index) => (
                                <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                                    <Link className="nav-link" to={link.path}>
                                        <span className="material-icons">{link.icon}</span>
                                    </Link>
                                </li>
                            ))
                        }
                        {/* Renderizar el menú desplegable para notificaciones */}
                        <li className="nav-item dropdown" style={{ opacity: 1 }}>
                            <span className="nav-link position-relative" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="material-icons" style={{ color: notify.data.length > 0 ? 'crimson' : '' }}>favorite</span>
                                <span className="notify_length">{notify.data.length}</span>
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ transform: 'translateX(75px)' }}>
                                <NotifyModal />
                            </div>
                        </li>
                        {/* Renderizar el menú desplegable para el perfil del usuario */}
                        <li className="nav-item dropdown" style={{ opacity: 1 }}>
                            <span className="nav-link dropdown-toggle" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <Avatar src={auth.user.avatar} size="medium-avatar" />
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>Profile</Link>
                                <label htmlFor="theme" className="dropdown-item" onClick={() => dispatch({ type: GLOBALTYPES.THEME, payload: !theme })}>
                                    {theme ? 'Light mode' : 'Dark mode'}
                                </label>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/" onClick={() => dispatch(logout())}>Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            );
        } else { // Si el usuario no está autenticado
            // Devolver el botón de inicio de sesión
            return (
                <div>
                    <Link
                        to="/login"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'background-color 0.3s, color 0.3s',
                            backgroundColor: '#000fff',
                            color: '#fff',
                            padding: '8px 12px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                        }}
                        className="login-btn"
                    >
                        <span className="material-icons" style={{ marginRight: '5px' }}>login</span>
                    </Link>
                </div>
            );
        }
    }
    

    const userauthLink = () => {
        if (auth.user) { // Verificar si el usuario está autenticado
            return (
                <div className="menu">
                    <ul className="navbar-nav flex-row">
                        {/* Renderizar los enlaces de navegación */}
                        {
                            navLinks.map((link, index) => (
                                <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                                    <Link className="nav-link" to={link.path}>
                                        <span className="material-icons">{link.icon}</span>
                                    </Link>
                                </li>
                            ))
                        }
                       
                        <li className="nav-item dropdown" style={{ opacity: 1 }}>
                            <span className="nav-link dropdown-toggle" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <Avatar src={auth.user.avatar} size="medium-avatar" />
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>Profile</Link>
                                <label htmlFor="theme" className="dropdown-item" onClick={() => dispatch({ type: GLOBALTYPES.THEME, payload: !theme })}>
                                    {theme ? 'Light mode' : 'Dark mode'}
                                </label>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/" onClick={() => dispatch(logout())}>Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            );
        } else { // Si el usuario no está autenticado
            // Devolver el botón de inicio de sesión
            return (
                <div>
                    <Link
                        to="/login"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'background-color 0.3s, color 0.3s',
                            backgroundColor: '#000fff',
                            color: '#fff',
                            padding: '8px 12px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                        }}
                        className="login-btn"
                    >
                        <span className="material-icons" style={{ marginRight: '5px' }}>login</span>
                    </Link>
                </div>
            );
        }
    }
    
    const adminauthLink = () => {
        if (auth.user) { // Verificar si el usuario está autenticado
            return (
                <div className="menu">
                    <ul className="navbar-nav flex-row">
                        {/* Renderizar los enlaces de navegación */}
                        {
                            navLinks.map((link, index) => (
                                <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                                    <Link className="nav-link" to={link.path}>
                                        <span className="material-icons">{link.icon}</span>
                                    </Link>
                                </li>
                            ))
                        }
                        {/* Renderizar el menú desplegable para notificaciones */}
                        <li className="nav-item dropdown" style={{ opacity: 1 }}>
                            <span className="nav-link position-relative" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="material-icons" style={{ color: notify.data.length > 0 ? 'crimson' : '' }}>favorite</span>
                                <span className="notify_length">{notify.data.length}</span>
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ transform: 'translateX(75px)' }}>
                                <NotifyModal />
                            </div>
                        </li>
                        {/* Renderizar el menú desplegable para el perfil del usuario */}
                        <li className="nav-item dropdown" style={{ opacity: 1 }}>
                            <span className="nav-link dropdown-toggle" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <Avatar src={auth.user.avatar} size="medium-avatar" />
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to='/pages/administracion/index'>Administration</Link>
                            <Link className="dropdown-item" to='/roles/userRole'>Roles</Link>
                               
                            
                            
                                <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>Profile</Link>
                               
                               
                               
                                <label htmlFor="theme" className="dropdown-item" onClick={() => dispatch({ type: GLOBALTYPES.THEME, payload: !theme })}>
                                    {theme ? 'Light mode' : 'Dark mode'}
                                </label>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/" onClick={() => dispatch(logout())}>Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            );
        } else { // Si el usuario no está autenticado
            // Devolver el botón de inicio de sesión
            return (
                <div>
                    <Link
                        to="/login"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'background-color 0.3s, color 0.3s',
                            backgroundColor: '#000fff',
                            color: '#fff',
                            padding: '8px 12px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                        }}
                        className="login-btn"
                    >
                        <span className="material-icons" style={{ marginRight: '5px' }}>login</span>
                    </Link>
                </div>
            );
        }
    }
    const authuseractiveLink = () => {
        if (auth.user && auth.user.isActive && auth.user.role === "useractivado") {
            return (
                <div className="menu">
                    <ul className="navbar-nav flex-row">
                        {/* Renderizar los enlaces de navegación */}
                        {
                            navLinks.map((link, index) => (
                                <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                                    <Link className="nav-link" to={link.path}>
                                        <span className="material-icons">{link.icon}</span>
                                    </Link>
                                </li>
                            ))
                        }
                        {/* Renderizar el menú desplegable para notificaciones */}
                        <li className="nav-item dropdown" style={{ opacity: 1 }}>
                            <span className="nav-link position-relative" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="material-icons" style={{ color: notify.data.length > 0 ? 'crimson' : '' }}>favorite</span>
                                <span className="notify_length">{notify.data.length}</span>
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ transform: 'translateX(75px)' }}>
                                <NotifyModal />
                            </div>
                        </li>
                        {/* Renderizar el menú desplegable para el perfil del usuario */}
                        <li className="nav-item dropdown" style={{ opacity: 1 }}>
                            <span className="nav-link dropdown-toggle" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <Avatar src={auth.user.avatar} size="medium-avatar" />
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>Profile</Link>
                                <label htmlFor="theme" className="dropdown-item" onClick={() => dispatch({ type: GLOBALTYPES.THEME, payload: !theme })}>
                                    {theme ? 'Light mode' : 'Dark mode'}
                                </label>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/" onClick={() => dispatch(logout())}>Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            );
        } else {
            // Devolver un mensaje o componente indicando que el usuario no está activado o no tiene el rol adecuado
            return null;
        }
    }
    
     
    return (

        <div className="menu">
        {!auth.user ? userLink() : auth.user.role !== "admin" ? userauthLink() : adminauthLink()}
        {authuseractiveLink()}
    </div>
    


    )
}

export default Menu
 /*
      <div >
      {!auth.user ? userLink() : auth.user.role !== "admin" ? userauthLink() : adminLink()}
      </div>
         <div className="menu">
    {!auth.user ? userLink() : auth.user.role !== "admin" ? userauthLink() : adminauthLink()}
    {userauthactiveLink()}
</div>
      
      
      */