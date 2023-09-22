import Input from '../../Component/Input';
import './Category.css'

function Category({ChangeHandler}){
    return( 
    <div>
        <h2 className='sidebar-title'>Category</h2>
        
        <div>
            <label className='sidebar-label-container'>
                <input onChange={ChangeHandler} type='radio' value="" name='test'/>
                <span className='checkmark'></span>All
            </label>

        <Input
        changeHandler={ChangeHandler}
        value="sneakers"
        title="Sneakers"
        name="test"
        />
        <Input
        changeHandler={ChangeHandler}
        value="flats"
        title="Flats"
        name="test"
        />
        <Input
        changeHandler={ChangeHandler}
        value="sandals"
        title="Sandals"
        name="test"
        />
        <Input
        changeHandler={ChangeHandler}
        value="heels"
        title="Heels"
        name="test"
        />
        </div>
    </div>
    );
}

export default Category;