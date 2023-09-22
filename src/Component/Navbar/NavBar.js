import './NavBar.css'
import {FiHeart} from 'react-icons/fi';
import{AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai';

function NavBar({InputChangeHandler, query}){
    return( 
        // <div>hi</div>
    <div className='nav'>
        {/* <div className='nav-container'>
        <input
          className="search-input"
          type="text"
          onChange={InputChangeHandler}
          value={query}
          placeholder="Enter your search shoes."
        />
        </div> */}
        <div>
            <p>SHODA</p>
        </div>


        <div className='profile-container'>
        
            <a href="#">
                <FiHeart className='nav-icons' />
            </a>

            <a href="">
                <AiOutlineShoppingCart className='nav-icons' />
            </a>

            <a href="">
                <AiOutlineUserAdd className='nav-icons' />
            </a>
            <div className="indecator"></div>
        </div>

        {/* signIn */}
        {/* <div>
            <a href="" className='sign'> Sign in</a>
            </div> */}

    {/* signIn and signUp */}
        <button class="signupBtn">
            Sign Up
         <span class="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="rgb(183, 128, 255)"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
          </span>
        </button>

    </div>
    );
};

export default NavBar;