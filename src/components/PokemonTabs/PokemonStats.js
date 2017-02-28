import React, { Component } from 'react';

export function renderStats (data) {
    data.map((key) => {
        return (
            <li>{key}</li>
        )
    })
}

const PokemonStats = (props) => {
    const { stats } = props.pokemons;

    return (
        <ul>
        </ul>
    )
}

export default PokemonStats;