import React from 'react';
import './Footer.css'

const footer = (props) => {
    let total = props.orders.reduce((sum, order) =>
        sum + (+order.quantity * +order.price), 0);


    let nadpis = null;
    if (props.orders.length == 0) {
        nadpis = <h4> Vsichko nakupi, jenata shte e dovolna </h4>;
    }

    const style = {
        fontSize: '20px',
        color: 'blue',
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        boxShadow: '5px 5px 5px yellow'
    }

    if (total > 100) {
        style.color = 'red';
        style.fontSize = '30px';
    }

    return (
        <footer className='Footer'>
            {nadpis}

            <span style={style}>Smetkata ti e: {total}</span>
        </footer>
    )
}

export default footer;