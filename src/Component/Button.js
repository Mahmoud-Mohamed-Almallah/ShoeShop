

function Button ({ClickHandler, value, title}){
    return <button onClick={ClickHandler} value={value} className="btns">{title}</button>
}

export default Button;