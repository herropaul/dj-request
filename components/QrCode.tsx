import { useState, useEffect } from "react";
import Image from "next/image";
import QRCode from "react-qr-code";

interface QrCodeResponse {
  qrCodeUrl: string;
}

const QrCode = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  // useEffect(() => {
  //   const sessionID = "1234"; // Replace with your actual sessionID
  //   fetch(process.env.DEV_ENV_URL + "/api/generateQrCode", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ sessionID }),
  //   })
  //     .then((response) => response.json())
  //     .then((data: QrCodeResponse) => setQrCodeUrl(data.qrCodeUrl))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={"hello"}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QrCode;
