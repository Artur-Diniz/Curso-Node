import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handlerOnChange, value, multiple, }) {
    return (
        <div className='input'>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handlerOnChange} value={value} {...(multiple ? { multiple } : ' ')}></input>
        </div>
    )
}

export default Input