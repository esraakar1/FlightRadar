import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {

  const { isLoading, error, flights } = useSelector((store) => store.flight);

  return (
   <header>
    <Link to="/" className='logo' >
    <img src="/logo.webp" alt="logo" width={40} />
    <h2>Uçuş Radarı</h2>
    </Link>

    <div className='buttons'>
        <NavLink to="/" >
            <button>Harita</button>
        </NavLink>
        <NavLink to="/list">
            <button>Liste</button>
        </NavLink>
    </div>

    <h4>{isLoading ? "Uçuşlar Aranıyor..." 
    : error ? <p className='error'>{error} </p> : `${flights.length} Uçuş Bulundu` }
    </h4>
   </header>
  )
}

export default Header;