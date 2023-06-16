import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { DcPage } from '../../heroes';

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

 const rol = JSON.parse(localStorage.getItem('rol'));
  const nombre = localStorage.getItem('nombre');

  const onLogOut = () => {
    logout();
    navigate('/login', {
      replace: true
    });
  };
  console.log("in navbar",rol);
  return (
   <>
   
    
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark padding-2">
        <div >
        <span className="nav-item nav-link text-secondary mr-auto">
    </span>
        </div>
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`} to="/marvel">
            Marvel
          </NavLink>

          <NavLink className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`} to="/dc">
            DC
          </NavLink>

          <NavLink className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`} to="/search">
            Search
          </NavLink>

          {
          (rol === "ADMIN_ROLE")
           ? <NavLink  NavLink
            className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`}
             to="/admin"
             >
              ADMIN
            </NavLink> 
            :
             ""
          } 

          {
          (rol === "USER_ROLE") ?
            <NavLink
             className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`}
             to="/user">
              USER
            </NavLink> 
            : 
            ""
          }
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">
          <span>{nombre}</span>
          </span>
          <button className="nav-item nav-link btn" onClick={onLogOut}>
            LogOut
          </button>
        </ul>
      </div>
    </nav>
    </>
  );
};