import {slideToggle} from './slideUp'

const operationAddUser = document.querySelector('.js-add-user')
const operationGetListOfUser = document.querySelector('.js-get-list-of-users')
const operationGetSpecUser = document.querySelector('.js-get-spec-user')
const operationUpdateUserData = document.querySelector('.js-update-user-data')
const operationDeletingUser = document.querySelector('.js-deleting-user')

const getChildrenArrow = (parent) => {
    return parent.querySelector('.arrow')
}

operationAddUser.addEventListener('click', () => {
    slideToggle(operationAddUser.nextElementSibling)

    const arrow = getChildrenArrow(operationAddUser)
    if (arrow.classList.contains('rotate')) {
        arrow.classList.remove('rotate')
    }
    else {
        arrow.classList.add('rotate')
    }
})

operationGetListOfUser.addEventListener('click', () => {
    slideToggle(operationGetListOfUser.nextElementSibling)

    const arrow = getChildrenArrow(operationGetListOfUser)
    if (arrow.classList.contains('rotate')) {
        arrow.classList.remove('rotate')
    }
    else {
        arrow.classList.add('rotate')
    }
})

operationGetSpecUser.addEventListener('click', () => {
    slideToggle(operationGetSpecUser.nextElementSibling)

    const arrow = getChildrenArrow(operationGetSpecUser)
    if (arrow.classList.contains('rotate')) {
        arrow.classList.remove('rotate')
    }
    else {
        arrow.classList.add('rotate')
    }
})

operationUpdateUserData.addEventListener('click', () => {
    slideToggle(operationUpdateUserData.nextElementSibling)

    const arrow = getChildrenArrow(operationUpdateUserData)
    if (arrow.classList.contains('rotate')) {
        arrow.classList.remove('rotate')
    }
    else {
        arrow.classList.add('rotate')
    }
})

operationDeletingUser.addEventListener('click', () => {
    slideToggle(operationDeletingUser.nextElementSibling)

    const arrow = getChildrenArrow(operationDeletingUser)
    if (arrow.classList.contains('rotate')) {
        arrow.classList.remove('rotate')
    }
    else {
        arrow.classList.add('rotate')
    }
})