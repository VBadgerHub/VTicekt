import { mailer } from "../../gateways/mailer_gateway.js";
import { IMail } from "../../shared/types.js";
import mailRepository from "../../Repositories/mailRepository.js";
import { mailLogger } from "../../utils/logger.js";
import { Request } from "express";

const mailCompose = (mailData : any) =>{
    const mail : IMail = {
        from: mailData.from,
        to: mailData.to,
        subject: mailData.subject,
        text: mailData.text,
    } 
    return mail
     
}

export const sendMail = async (mailOptions : Request ) =>{ 
    let mailToSend = mailCompose(mailOptions)
    mailLogger.info(`Mail Data: ${JSON.stringify(mailToSend)}}`)

    try {
        let res = await mailer.sendMail(mailToSend);        
        if (res) { await mailRepository.add(mailToSend, {info: res.messageId, error: null}) }
        mailLogger.info(`Mail Send: ${JSON.stringify(mailToSend)} ID: ${res.messageId}`)
        return {code: 200, msg: 'Mail send'}

    } catch (error) {
        
        let message = 'Unknown Error'
        if (error instanceof Error) message = error.message       
        mailLogger.error(`Mail Error: ${JSON.stringify(mailToSend)} MSG: ${message}`)
        await mailRepository.add(mailToSend, {info: null, error: message})
        return {code: 400, msg: message}
    }
}