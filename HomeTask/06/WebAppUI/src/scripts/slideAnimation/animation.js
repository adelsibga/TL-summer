import {slideToggle} from './slideUp'

const ITEM_PARAMETERS_CONTAINER = '.item__parameters-container'

const operationAddUser = document.querySelector('.js-add-user')
const operationGetListOfUser = document.querySelector('.js-get-list-of-users')
const operationGetSpecUser = document.querySelector('.js-get-spec-user')
const operationUpdateUserData = document.querySelector('.js-update-user-data')
const operationDeletingUser = document.querySelector('.js-deleting-user')

operationAddUser.addEventListener('click', () => {
    slideToggle(operationAddUser.querySelector(`${ITEM_PARAMETERS_CONTAINER}`))
    if (operationAddUser.querySelector('.arrow').classList.contains('rotate')) {
        operationAddUser.querySelector('.arrow').classList.remove('rotate')
    }
    else {
        operationAddUser.querySelector('.arrow').classList.add('rotate')
    }
})

operationGetListOfUser.addEventListener('click', () => {
    slideToggle(operationGetListOfUser.querySelector(`${ITEM_PARAMETERS_CONTAINER}`))
    if (operationGetListOfUser.querySelector('.arrow').classList.contains('rotate')) {
        operationGetListOfUser.querySelector('.arrow').classList.remove('rotate')
    }
    else {
        operationGetListOfUser.querySelector('.arrow').classList.add('rotate')
    }
})

operationGetSpecUser.addEventListener('click', () => {
    slideToggle(operationGetSpecUser.querySelector(`${ITEM_PARAMETERS_CONTAINER}`))
    if (operationGetSpecUser.querySelector('.arrow').classList.contains('rotate')) {
        operationGetSpecUser.querySelector('.arrow').classList.remove('rotate')
    }
    else {
        operationGetSpecUser.querySelector('.arrow').classList.add('rotate')
    }
})

operationUpdateUserData.addEventListener('click', () => {
    slideToggle(operationUpdateUserData.querySelector(`${ITEM_PARAMETERS_CONTAINER}`))
    if (operationUpdateUserData.querySelector('.arrow').classList.contains('rotate')) {
        operationUpdateUserData.querySelector('.arrow').classList.remove('rotate')
    }
    else {
        operationUpdateUserData.querySelector('.arrow').classList.add('rotate')
    }
})

operationDeletingUser.addEventListener('click', () => {
    slideToggle(operationDeletingUser.querySelector(`${ITEM_PARAMETERS_CONTAINER}`))
    if (operationDeletingUser.querySelector('.arrow').classList.contains('rotate')) {
        operationDeletingUser.querySelector('.arrow').classList.remove('rotate')
    }
    else {
        operationDeletingUser.querySelector('.arrow').classList.add('rotate')
    }
})