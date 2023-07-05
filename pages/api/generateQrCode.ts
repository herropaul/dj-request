import { NextApiRequest, NextApiResponse } from "next";
import QRCode from "qrcode";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const sessionID = req.body.sessionID; // assuming you're sending sessionID in request body

    try {
      const qrCodeUrl = await QRCode.toDataURL(sessionID);

      return res.status(200).json({ qrCodeUrl });
    } catch (error) {
      return res.status(500).json({ error: "QR Code generation failed" });
    }
  } else {
    return res.status(405).json({ error: "We only support POST" });
  }
}
