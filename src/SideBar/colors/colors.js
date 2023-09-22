import Input from '../../Component/Input';
import './colors.css'

function Colors({ChangeHandler}){
    return <div>
        <h2 className='sidebar-title color-title'>Color</h2>

        <label className='sidebar-label-container'>
                <input onChange={ChangeHandler} type='radio' value="" name='test1'/>
                <span className='checkmark all'></span>All
            </label>

         <Input 
         changeHandler={ChangeHandler}
         value="black"
         title="Black"
         name="test1"
         color="black"
         />     
         <Input 
         changeHandler={ChangeHandler}
         value="blue"
         title="Blue"
         name="test1"
         color="blue"
         />
         <Input 
         changeHandler={ChangeHandler}
         value="red"
         title="Red"
         name="test1"
         color="red"
         />
         <Input 
         changeHandler={ChangeHandler}
         value="green"
         title="Green"
         name="test1"
         color="green"
         />
          {/* the white box didn't appear so we use the label */}
          <label className="sidebar-label-container">
            <input type='radio' 
            onChange={ChangeHandler}
             value="white"
              name='test1' />
              <span
              className='checkmark'
              style={{background: 'white', border: '2px solid black'}}></span> white
          </label>
         
    </div>
}

export default Colors;