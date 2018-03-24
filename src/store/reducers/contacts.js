import * as actionTypes from '../actions/actionTypes';

const initialState = {
    contacts: [],
    clickedContact: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.CONTACTS_REQUEST_SUCCES:
            return {...state, contacts: action.contacts};
        case actionTypes.SHOW_CONTACT_INFO:
            return {...state, clickedContact: action.clickedContact};
        default:
            return state;
    }
};

export default reducer;