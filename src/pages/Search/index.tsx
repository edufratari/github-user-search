import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Button from '../../core/components/Button';

const Search = () => {

    return (
        <div className="search-container">
            <div className="search-content">
                <h1 className="search-title">
                    Encontre um perfil Github
                </h1>
                <Button text="Encontrar" />
            </div>
        </div>
    );

};

export default Search;