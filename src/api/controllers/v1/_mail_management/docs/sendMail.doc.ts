
const sendMail = {
    tags: ["Mail"],
    description: "Send mail",
    responses: {
        200: {
            description: "OK",
        },
        400: {
            description: "Bad Request",
        }
    }
}



export const sendMailDocs = {
    "/sendMail" : {
        post : sendMail
    }
}