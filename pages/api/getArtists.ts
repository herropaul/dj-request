import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import getURL from "@/utils/getURL";

const ARTIST_ID = "0TnOYISbd1XYRBk9myaseg";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch the access token
    const tokenResponse = await axios.post(`${getURL("/api/accessToken")}`);
    const { access_token: accessToken } = tokenResponse.data;

    // Use the access token to fetch artist data
    const artistResponse = await axios.get(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    res.status(200).json(artistResponse.data);
  } catch (err) {
    console.error("Axios err: ", err);
  }
}
