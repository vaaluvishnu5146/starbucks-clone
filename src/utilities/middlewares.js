import axios from "axios";

const members = [
    {
        id: 1,
        email: "vishnu@test.com",
        phoneNumber: "9089786756",
        password: "password123"
    }, {
        id: 2,
        email: "gokul@test.com",
        phoneNumber: "9023456786",
        password: "password@123"
    }
];

export function loginMiddleware(data = {}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            members.find((member) => {
                if (member.phoneNumber === data.phoneNumber && member.password === data.password) {
                    resolve({success: true, message: "Login success"});
                } else {
                    reject({success: false, message: "Login failed"});
                }
            })
        }, 3000);
    })
}

export function getAllPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts/').then((result) => {
        return result;
    }).catch((error) => {
        console.log(error)
    })
}

export function createNewPost() {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        body: JSON.stringify({
            title: 'Vishnu',
            body: 'Vishnu Test data',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
}

export function patchExistingPost() {
    return fetch(
        "https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            body: JSON.stringify({
                "title": "Vishnu Vardhan (Updated)"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
    }).then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

export function deletePost() {
    return fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}