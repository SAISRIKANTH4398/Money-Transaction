import { combineReducers, createStore } from "redux";

const initialState = {
    balance: 0,
    fullName: "",
    mobile: null
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'deposit':
            return {...state, balance: state.balance + +action.payload}
        case 'withdrawl':
            return {...state, balance: state.balance - +action.payload}    

        case 'updateName':
            return {...state, fullName: action.payload}

        case 'updateMobile':
            return {...state, mobile: action.payload}

        case 'reset':
            return initialState    

        default:
            return state
    }

}

function transactionReducer(state = [], action){
    switch (action.type){
        case 'ADD_TRANSACTION':
            return [...state,
                {
                    id: action.payload.id,
                    amount: action.payload.amount,
                    type: action.payload.type,
                    date: action.payload.date
                }
            ]

        default:
            return state
    }
}

let rootReducer = combineReducers({
    account: reducer, 
    transaction: transactionReducer
})

const store = createStore(rootReducer)



export default store