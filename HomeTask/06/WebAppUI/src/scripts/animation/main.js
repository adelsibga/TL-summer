import {slideToggle} from './slide'

const operationAddUser = document.querySelector('.js-add-user')
const operationGetListOfUser = document.querySelector('.js-get-list-of-users')
const operationGetSpecUser = document.querySelector('.js-get-spec-user')
const operationUpdateUserData = document.querySelector('.js-update-user-data')
const operationDeletingUser = document.querySelector('.js-deleting-user')

const animateOperationContent = el => {
    slideToggle(el.nextElementSibling)

    const getChildrenArrow = parent => parent.querySelector('.arrow')

    const arrow = getChildrenArrow(el)
    if (arrow.classList.contains('rotate')) {
        arrow.classList.remove('rotate')
    } else {
        arrow.classList.add('rotate')
    }
}

operationAddUser.addEventListener('click', () => {
    animateOperationContent(operationAddUser)
})

operationGetListOfUser.addEventListener('click', () => {
    animateOperationContent(operationGetListOfUser)
})

operationGetSpecUser.addEventListener('click', () => {
    animateOperationContent(operationGetSpecUser)
})

operationUpdateUserData.addEventListener('click', () => {
    animateOperationContent(operationUpdateUserData)
})

operationDeletingUser.addEventListener('click', () => {
    animateOperationContent(operationDeletingUser)
})
