import { PrismaClient } from "@prisma/client"
import { IMail, IDeliveryInfo } from "../shared/types"
const prisma = new PrismaClient()

const add = async (mail: IMail, deliveryInfo: IDeliveryInfo ) =>{
    await prisma.mail.create({
        data: {
            ...mail,
            created_at: new Date(),
            info: deliveryInfo.info,
            error: deliveryInfo.error
        }
    })
}

export default 
{ 
    add,
} 