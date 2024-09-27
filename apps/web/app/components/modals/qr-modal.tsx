"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Modal } from "@club/ui";
import LinkLogo from "../dashboard/LinkLogo";
import QRCode from "qrcode";

function QRModalCallback({
    showQRModal,
    setShowQRModal,
}: {
    showQRModal: boolean;
    setShowQRModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [src, setSrc] = useState<string>("");

    const generateQRCodeWithLogo = async () => {
        try {
            const qrDataUrl = await QRCode.toDataURL("https://github.com/shadcn");

            // Code to attach the loogo to center of the the QRCode
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            const qrImage = new Image();
            const logoImage = new Image();
            
            qrImage.src = qrDataUrl;
            logoImage.src = "https://avatars.githubusercontent.com/u/124599?v=4";

            qrImage.onload = () => {
                canvas.width = qrImage.width;
                canvas.height = qrImage.height;

                // below is the code for : drawing the qrcode
                if(!ctx) return
                ctx.drawImage(qrImage, 0, 0);
                logoImage.crossOrigin = "anonymous";        // this is required so that , we can import any url and create qrcode from it else it will throw tainted error. ( google it )
                logoImage.onload = () => {                  // when the img will load , attach logo to it by using canvas "drawImage" method.
                    const logoSize = qrImage.width / 5;            
                    const logoX = (qrImage.width - logoSize) / 2;
                    const logoY = (qrImage.height - logoSize) / 2;

                    // Draw the logo in the center of the QR code
                    ctx.drawImage(logoImage, logoX, logoY, logoSize, logoSize);

                    // Get the final image data URL
                    setSrc(canvas.toDataURL());
                };
            };
        } catch (error) {
            console.error("Error generating QR code:", error);
        }
    };

    useEffect(() => {
        if (showQRModal) {
            generateQRCodeWithLogo();
        }
    }, [showQRModal]);

    const handleDownload = () => {
        if (src) {
            // create a "a" tag and attach the src url to it with name: "qrcode.png" andn append the data to the a tag and once clicked , then remove the a tag.
            const link = document.createElement("a");
            link.href = src;
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <Modal
            showModal={showQRModal}
            setShowModal={setShowQRModal}
            className="max-w-xl max-h-[550px] bg-gray-50"
        >
            <div className="flex flex-col items-center gap-10">
                <div className="px-5 py-7 bg-white border-b flex flex-col items-center justify-center w-full h-fit rounded-tr-md rounded-tl-md">
                    <div className="border rounded-full size-12 p-2 items-center bg-gradient-to-t from-gray-100 flex shrink-0">
                        <LinkLogo src={"https://youtube.com/"} alt="link-logo" />
                    </div>
                    <p>Download QR Code</p>
                </div>
                <div className="p border rounded-md w-fit h-fit">
                    {src && <img src={src} alt="QR Code" className="w-[240px]"/>}
                </div>
                <button
                    onClick={handleDownload}
                    className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Download QR Code
                </button>
            </div>
        </Modal>
    );
}

export default QRModalCallback;

export function useQrModal() {
    const [showQRModal, setShowQRModal] = useState<boolean>(false);

    const QRCallback = useCallback(
        () => (
            <QRModalCallback
                showQRModal={showQRModal}
                setShowQRModal={setShowQRModal}
            />
        ),
        [showQRModal, setShowQRModal]
    );

    return useMemo(() => ({
        showQRModal,
        QRCallback,
        setShowQRModal,
    }), [showQRModal, QRCallback, setShowQRModal]);
}
