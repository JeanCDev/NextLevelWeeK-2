import React, {ButtonHTMLAttributes} from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    innerText: string,
}

const Button: React.FC<ButtonProps> = ({innerText, ...rest}) =>{

    return (
        <button id="submit-button">
            {innerText}
        </button>
    )

}

export default Button;