import React from 'react';
import './styles.scss';
import { ReactComponent as MainImage } from 'core/assets/images/main-image.svg';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';

const Home = () => (
    <div className="home-container">
        <div className="row home-content">
            <h1 className="text-title">
                Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
            </h1>
            <p className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /><br />
                Favor observar as instruções passadas no capítulo sobre a<br />
                elaboração deste projeto. <br /><br />
                Este design foi adaptado a partir de Ant Design System for Figma, de<br />
                Mateusz Wierzbicki: <span className="text-email">antforfigma@gmail.com</span>
            </p>
            <Link to="/search">
                <Button text="Começar" />
            </Link>
        </div>
    </div>
);

export default Home;