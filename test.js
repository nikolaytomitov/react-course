const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    domati: [],
    krastavici: [],
    zarzali: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DOMAT': {
            const domati = [...state.domati];
            domati.push(action.payload);
            return { ...state, domati };
        }
    }
    return state;
};

const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() => {
    console.log("Promeni se neshto!");
});

store.subscribe(() => {
    console.log("Promeni se neshto 2!");
});

console.log(store.getState());

store.dispatch({ type: 'ADD_DOMAT', payload: { name: 'cherven', teglo: 5 } });
store.dispatch({ type: 'ADD_DOMAT', payload: { name: 'zelen', teglo: 15 } });

console.log(store.getState());

