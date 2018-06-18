import React from 'react';
import classes from './Footer.css';

const footer = (props) => {
    let total = props.orders.reduce((sum, order) =>
        sum + (+order.quantity * +order.price), 0);


    let nadpis = null;
    if (props.orders.length === 0) {
        nadpis = <h4> Vsichko nakupi, jenata shte e dovolna </h4>;
    }
    const smetkaClasses = [classes.smetka];
    if (total > 100) {
        smetkaClasses.push(classes.golqmaSmetka);
    }

    return (
        <footer className={classes.Footer}>
            {nadpis}

            <span className={smetkaClasses.join(' ')}>
                Smetkata ti e: {total}
            </span>
        </footer>
    )
}

export default footer;