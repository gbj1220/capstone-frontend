import Axios from '../components/Axios/Axios';

//creating an action and assigning it to something as a reminder
export const CALL_RECIPE_API = 'codeImmersives/callRecipeApi';

let currentSearch = localStorage.getItem('currentSearch');
let prevHit = JSON.parse(currentSearch);
console.log(`====== parsedData ======`);
console.log(prevHit);

//creating an initialState for searchState to utilize
export const initialState = {
    mainData: {
        hits: prevHit,
    },
};

export const callRecipeApiActionCreator = (usrInput) => async (dispatch) => {
    try {
        let response = await Axios.post('/users/get-recipe-data', {
            usrInput,
        });
        // console.log(`====== response ======`);
        // console.log(response);

        let hits = response.data.data.hits;

        localStorage.setItem('currentSearch', JSON.stringify(hits));

        dispatch({
            type: CALL_RECIPE_API,
            payload: {
                response: response.data.data.hits,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CALL_RECIPE_API:
            return {
                ...state,
                mainData: {
                    hits: action.payload.response,
                },
            };
        default:
            return state;
    }
};
