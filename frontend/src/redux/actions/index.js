import {addPostAction,initialPostsAction,SearchPostAction,deletePostAction} from './actionTypes'

export const addPost = payload => ({
    type: addPostAction,
    payload
})
export const initPost = payload => ({
    type:initialPostsAction,
    payload
})
export const seatchPost = payload =>({
    type:SearchPostAction,
    payload
})
export const deletePost = payload =>({
    type:deletePostAction,
    payload
})