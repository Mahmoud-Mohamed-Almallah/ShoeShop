import './Recommended.css'
import Button from '../Component/Button';

function Recommended({ClickHandler, InputChangeHandler, query}){
    return <>
    <div>
        <h2 className='recommended-title'>Recommended</h2>
        
        <div className='recommended-flex'>
            {/* <button className='btns'>All products</button> */}

            {/* the search label */}
            <div className='nav-container'>
            <input
          className="search-input"
          type="text"
          onChange={InputChangeHandler}
          value={query}
          placeholder="Enter your search shoes."
            />
            </div>

            
            <Button ClickHandler={ClickHandler} value="" title="All products" />
            <Button ClickHandler={ClickHandler} value="Nike" title="Nike" />
            <Button ClickHandler={ClickHandler} value="Adidas" title="Adidas" />
            <Button ClickHandler={ClickHandler} value="Puma" title="Puma" />
            <Button ClickHandler={ClickHandler} value="Vans" title="Vans" />
        </div>
    </div>
    
    
    </>
}

export default Recommended;