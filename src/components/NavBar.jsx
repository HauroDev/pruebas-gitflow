import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to='/'>Inicio</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/favs'>Favs</NavLink></li>
        <li><NavLink to='/cart'>Cart</NavLink></li>
      </ul>
    </nav>
  )
}
export default NavBar