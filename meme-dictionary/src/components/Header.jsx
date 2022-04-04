import React, {useState} from 'react'
import { FaImage, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  }
  return (
    <header className="header">
      <Link to='/' className='header__photoLink'>
      <span className="header__title">PocketTalk</span>
        </Link>
      <form className='header__input' onSubmit={submitHandler}>
        <div className='header__input--div'>
        <input type='text' value={input} className="header__input" onChange={(e) => setInput(e.target.value)}  />
            <FaSearch className='header__search-icon' />
        
        </div>
        </form>
      <Link to='/photos' className='header__photoLink'>
        <FaImage size={35} style={{color: '#f7f7f7'}} />
        </Link>

        <Link to='/profile' className='header__photoLink'>
        <img src="./img/baby2.jpg" alt="" className="header__profile-image" />
        </Link>
    </header>
  )
}

export default Header