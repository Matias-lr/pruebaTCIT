import {addPostAction,initialPostsAction,SearchPostAction, deletePostAction} from '../actions/actionTypes'

const initialState = {};

export default function(state=initialState,action) {
    switch(action.type){
        case initialPostsAction:
            return {post:action.payload,
            inmutable:action.payload}
            break;
        case addPostAction:
            return {post: [...state.post,action.payload],
                inmutable:[...state.post,action.payload]}
            break;
        case SearchPostAction:
            return {
            inmutable:[...state.inmutable],
            post : [...state.inmutable.filter(res => res.name.toLowerCase().includes(action.payload.toLowerCase()))]}
        case deletePostAction:
            return {
                post: [...state.inmutable.filter(res => res.id != action.payload)],
                inmutable:[...state.inmutable.filter(res => res.id != action.payload)],
            }
        default:
            return {...state}
    }
}