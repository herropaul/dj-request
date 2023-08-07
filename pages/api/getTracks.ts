import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getURL from "@/utils/getURL";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch the access token
    const tokenResponse = await axios.post(`${getURL("/api/accessToken")}`);
    const { access_token: accessToken } = tokenResponse.data;

    // Use access token to fetch track data
    // Utilizes the search API
    const searchResponse = await axios.get(
      `https://api.spotify.com/v1/search`,
      {
        params: {
          q: req.query.q,
          type: "track",
          limit: 10,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.status(200).json(searchResponse.data);
  } catch (err) {
    console.log("Error grabbing tracks: ", err);
  }
}
