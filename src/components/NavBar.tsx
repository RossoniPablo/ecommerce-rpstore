import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCircleUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <div className="w-full">

      <div className="max-w-7xl mx-auto py-3 flex  justify-between">
        <div></div>
        <div className='flex items-center gap-5 text-secondary text-lg'>
          <FontAwesomeIcon icon={faInstagram} className='hover:text-primary' />
          <FontAwesomeIcon icon={faFacebook} className='hover:text-primary' />
          <FontAwesomeIcon icon={faYoutube} className='hover:text-primary' />
        </div>
      </div>


      <div className="w-full py-4 shadow-[0px_5px_10px_-2px_rgba(0,0,0,0.05),0px_-5px_10px_-2px_rgba(0,0,0,0.05)]">
        <div className='max-w-7xl mx-auto flex justify-between items-center'>

          <div className="">
            <Link to="/">
              <img src="/src/assets/images/logo.png" alt="Logo" className='w-[140px]' />
            </Link>
          </div>

          <div>
            <SearchBar />
          </div>

          <div className='flex gap-5 text-2xl text-primary'>
            <FontAwesomeIcon icon={faCircleUser} />
            <FontAwesomeIcon icon={faCartShopping} />
          </div>


        </div>
      </div>

      <div className="max-w-4xl mx-auto py-3 flex justify-center ">
        <nav>
          <ul className="flex gap-10 text-zinc-500">

            <li className='hover:text-primary'>
              <NavLink
                to="/novidades"
                className={({ isActive }) => isActive ? 'text-primary' : ''}
              >
                NOVIDADES
              </NavLink>
            </li>
            <li className='hover:text-primary'>
              <NavLink
                to="camisetas"
                className={({ isActive }) => isActive ? 'text-primary' : ''}
              >
                CAMISETAS

              </NavLink>
            </li>

            <li className='hover:text-primary'>
              <NavLink
                to="/moletom"
                className={({ isActive }) => isActive ? 'text-primary' : ''}
                end
              >
                MOLETOM
              </NavLink>
            </li>
            <li className='hover:text-primary'>
              <NavLink
                to="/acessorios"
                className={({ isActive }) => isActive ? 'text-primary' : ''}
              >
                ACESSÓRIOS
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
    </div >
  )
}