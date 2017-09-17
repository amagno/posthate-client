import {observable} from 'mobx'


export const getUserFromLocalStorage = () => {
    const user = {
        id: localStorage.getItem('id') || undefined,
        name: localStorage.getItem('name') || undefined,
        email: localStorage.getItem('email') || undefined,
        password: localStorage.getItem('password') || undefined 
    }
    if(!user.id || !user.email || !user.name || !user.password) {
        return undefined
    }
    return user
}
export const state = observable({
    isLogged: localStorage.getItem('token') && getUserFromLocalStorage() ? true : false,
    user: getUserFromLocalStorage()
})
export const storageLogin = (token, user) => {
    localStorage.setItem('token', token)
    Object.keys(user).forEach(key => {
      localStorage.setItem(key, user[key])
    })
    state.isLogged = true
    state.user = getUserFromLocalStorage()
}
export const storageLogout = () => {
    localStorage.clear()
    state.isLogged = false
    state.user = undefined
}
export const isLogged = () => {
    return state.isLogged && getUserFromLocalStorage() ? true : false
}