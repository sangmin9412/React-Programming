import React from 'react';
import style from './Button1.module.css';
import cn from 'classnames';

const Button = ({ size }) => {
    if (size === 'big') {
        return <button className={cn(style.button, style.big)}>큰 버튼</button>;
    } else {
        return <button className={cn(style.button, style.small)}>작은 버튼</button>;
    }
};

export default Button;
console.log(style)