import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <div>
        <button className="btn">
            <span className="text-color">{text}</span>
        </button>
    </div>
);

export default ButtonIcon;