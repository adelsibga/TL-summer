import {slideDown} from './animation/slide'

const retrieveResponse = async response => {
    let result = {}

    if (response.ok) {
        result = await response.json()
    }
    else {
        result = {
            url: response.url,
            status: response.status,
            statusText: response.statusText
        }
    }

    return result
}

const getData = async (url = '') => retrieveResponse(await fetch(url))

const postData = async (url = '', data = {}, method = 'POST') => {
    const response = await fetch(url, {
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        method
    })

    return retrieveResponse(response)
}

const deleteData = async (url = '') => {
    const response = await fetch(url, {
        method: 'DELETE'
    })

    return retrieveResponse(response)
}

const showData = (elementId, response) => {
    let element = document.getElementById(elementId)

    element.innerHTML = JSON.stringify(response, null, 4)
    if (element.classList.contains('hidden')) {
        slideDown(element)
    }
}

export {
    getData,
    postData,
    deleteData,
    showData
}
