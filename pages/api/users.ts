// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Send 'John Doe' as response
    res.status(200).json({ name: "John Doe" });
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
