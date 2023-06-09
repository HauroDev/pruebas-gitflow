import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Start</NavLink>
        </li>
        <li>
          <NavLink to='/about'>sobre esto</NavLink>
        </li>
        <li>
          <NavLink to='/favs'>FAvoritos</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>Carrito</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
