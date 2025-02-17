const members = [
    {
        id: 1,
        email: "vishnu@test.com",
        phoneNumber: "9089786756",
        password: "password123"
    },
    {
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
                if(member.phoneNumber === data.phoneNumber && member.password === data.password) {
                    resolve({
                        success: true,
                        message: "Login success"
                    });
                } else {
                    reject({
                        success: false,
                        message: "Login failed"
                    });
                }
            })
        }, 3000);
    })
}