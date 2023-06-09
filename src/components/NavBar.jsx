import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
<<<<<<< HEAD
      <a href=''>Hola</a>
      <a href=''>salir</a>
      <a> <hr /></a>
      <a href=""></a>
      <h1>hola como estas</h1>
      <h1>asdasdas</h1>
      
=======
      <ul>
        <li><NavLink to='/'>Inicio</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/favs'>Favs</NavLink></li>
        <li><NavLink to='/cart'>Cart</NavLink></li>
      </ul>
>>>>>>> aa3e14b19efb6de3fff643a70ac6d46c550f30ae
    </nav>
  )
}
export default NavBar