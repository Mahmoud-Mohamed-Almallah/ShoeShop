

function Input({changeHandler, value, title, name, color}){
    return (
    <div>
         <label className='sidebar-label-container'>
                <input onChange={changeHandler} type='radio' value={value} name={name} />
                <span className='checkmark' style= {{backgroundColor: color}}
                ></span>
                {title}
            </label>
    </div>
    )
}

export default Input;