<<<<<<< HEAD
const initialState = {
    username: '',
    userId: '',
    propertyName: '',
    propertyDescription: '',
    address: '',
    city: '',
    state: '',
    zip: null,
    imageUrl: '',
    loan: null,
    monthlyMortgage: null,
    desiredRent: null
}

const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_USERID = 'UPDATE_USERID';
const UPDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME';
const UPDATE_PROPERTY_DESCRIPTION = 'UPDATE_PROPERTY_DESCRIPTION';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMAGEURL = 'UPDATE_IMAGEURL';
const UPDATE_LOAN = 'UPDATE_LOAN';
const UPDATE_MONTHLY_MORTGAGE = 'UPDATE_MONTHLY_MORTGAGE';
const UPDATE_DESIRED_RENT = 'UPDATE_DESIRED_RENT';

function reducer(state = initialState, action) {
    switch( action.type ){
        case UPDATE_USERNAME:
        return Object.assign( {}, state, { username: action.payload } );
        case UPDATE_USERID:
        return Object.assign( {}, state, { userId: action.payload } );
        case UPDATE_PROPERTY_NAME:
        return Object.assign( {}, state, { propertyName: action.payload } );
        case UPDATE_PROPERTY_DESCRIPTION:
        return Object.assign( {}, state, { propertyDescription: action.payload } );
        case UPDATE_ADDRESS:
        return Object.assign( {}, state, { address: action.payload } );
        case UPDATE_CITY:
        return Object.assign( {}, state, { ctiy: action.payload } );
        case UPDATE_STATE:
        return Object.assign( {}, state, { state: action.payload } );
        case UPDATE_ZIP:
        return Object.assign( {}, state, { zip: action.payload } );
        case UPDATE_IMAGEURL:
        return Object.assign( {}, state, { imageUrl: action.payload } );
        case UPDATE_LOAN:
        return Object.assign( {}, state, { loan: action.payload } );
        case UPDATE_MONTHLY_MORTGAGE:
        return Object.assign( {}, state, { monthlyMortgage: action.payload } );
        case UPDATE_DESIRED_RENT:
        return Object.assign( {}, state, { desiredRent: action.payload } );
        default: return state;
    }
}
=======




>>>>>>> f8ae917046420e3976920f14a450a30854296f0d

