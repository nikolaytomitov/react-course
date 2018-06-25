import { DELETE_PRODUCT } from "../actions/actions";
import * as actionTypes from '../../store/actions/actions'

const initialState = {
    orders: [
        { price: 5, quantity: 4, name: "sirene" },
        { price: 35, quantity: 14, name: "domati" },
        { price: 35, quantity: 14, name: "krastavici" },
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            const newOrders = [...state.orders];
            let index = newOrders.findIndex(order => order.id === action.id);
            newOrders.splice(index, 1);

            return { ...state, orders: newOrders };

        default:
            break;
    }
    return state;
}

export default rootReducer;