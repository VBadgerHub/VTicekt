import  { Request, Response } from 'express';

const adminTest = async (req: Request, res: Response) => {
    res.json({data: 'test'})
}

export default {
    adminTest,
}