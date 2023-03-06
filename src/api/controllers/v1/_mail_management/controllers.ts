import { Response, Request } from 'express'
import { sendMail } from '../../../../_mail_management/usecases/index.js'


const mailSender = async (req:Request, res:Response) =>{
    
    if (Object.keys(req.body).length < 1) {
        res.sendStatus(400)
        return
    }
    
    let response = await sendMail(req.body)
    res.sendStatus(response.code)
}

export default {
    mailSender
} 