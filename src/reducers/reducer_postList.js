import {FETCH_POST, POST_NEWPOST,OPEN_POSTID} from '../actions/index';
import _ from 'lodash';

export default function(state={}, action) {
    switch( action.type ) {
        case FETCH_POST: 
            return  _.mapKeys(action.payload.data, 'id');
        case OPEN_POSTID:
            return {[action.payload.data.id]: action.payload.data, ...state}
    }
    return state;
}