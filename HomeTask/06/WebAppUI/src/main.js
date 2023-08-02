import './style.scss'

import {getData, postData, deleteData, showData} from './scripts/data'

document.getElementById('textareaAddUser').placeholder = '{\n' +
    '   "Title": "Mr.",\n' +
    '   "FirstName": "John",\n' +
    '   "LastName": "Doe",\n' +
    '   "Role": "Admin",\n' +
    '   "Email": "johndoe@example.com",\n' +
    '   "Password": "password",\n' +
    '   "ConfirmPassword": "password"\n' +
    '}'

document.getElementById('buttonAddUser').addEventListener('click', () => {
    const userData = document.getElementById('textareaAddUser').value

    postData(
        '/api/users',
        JSON.parse(userData)
    ).then(response => showData('messageAddUser', response))
})

document.getElementById('buttonGetUsers').addEventListener('click', () => {
    getData('/api/users').then(users => showData('messageGetUsers', users))
})

document.getElementById('buttonGetUserById').addEventListener('click', () => {
    const userId = document.getElementById('inputGetUserById').value

    getData(`/api/users/${userId}`).then(response => showData('messageGetUserById', response))
})

document.getElementById('buttonUpdateUserData').addEventListener('click', () => {
    const userId = document.getElementById('inputUpdateUserData').value
    const userData = document.getElementById('textareaUpdateUserData').value

    postData(
        `/api/users/${userId}`,
        JSON.parse(userData),
        'PUT'
    ).then(response => showData('messageUpdateUserData', response))
})

document.getElementById('buttonDeleteUser').addEventListener('click', () => {
    const userId = document.getElementById('inputDeleteUser').value

    deleteData(`/api/users/${userId}`).then(response => showData('messageDeleteUser', response))
})