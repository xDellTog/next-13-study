import { NextApiRequest, NextApiResponse } from "next";

export type User = {
    username: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ username: 'johndoe' });
}