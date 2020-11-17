import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHdd,faPlus,faHome } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.scss'
import logo from '../../../images/logos/Logo.png'

export const Sidebar = () => {
    return (
    <nav class="nav flex-column">
        <Link class="nav-link " to="/">
        <img src={logo} alt=""/>
      </Link>
  <Link class="nav-link active" to="/booklist">
  <FontAwesomeIcon icon={faHdd} />
      Book List</Link>
  <Link class="nav-link" to="/add">
  <FontAwesomeIcon icon={faPlus} />
      Add House</Link>
  <Link class="nav-link" to="/rent">
  <FontAwesomeIcon icon={faHome} />
      My Rent</Link>
</nav>
    )
}
