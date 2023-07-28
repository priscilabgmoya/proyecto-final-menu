function InputC (props) {
    return(
        <>
        <input className="prueba" maxLength={30} minLength={2} max={17} min={2}  type={props.tipo} placeholder={props.placeholder}/>
        </>
    )
}

export default InputC