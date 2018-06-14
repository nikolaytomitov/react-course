import React from 'react';


const footer = (props) => {
    let total = props.orders.reduce((sum, order) =>
        sum + (+order.quantity * +order.price), 0);


    let nadpis = null;
    if (props.orders.length == 0) {
        nadpis = <h4> Vsichko nakupi, jenata shte e dovolna </h4>;
    }

    return (
        <footer>
            {nadpis}

            <span>Smetkata ti e: {total}</span>
        </footer>
    )
}

export default footer;