// "use client";

import React from "react";
import Button from "@/components/Button";

export default async function HomePage() {
    //** Functions */
    const getProvider = () => {
        if (typeof window !== "undefined" && "phantom" in window) {
            const anyWindow: any = window;
            const provider = anyWindow.phantom?.ethereum;

            if (provider) {
                return provider;
            }

            window.open("https://phantom.app/", "_blank");
        }
    };

    const provider = getProvider();
    let signedMessage;

    if (provider) {
        const message = `To avoid digital dognappers, sign below to authenticate with CryptoCorgis`;
        const encodedMessage = new TextEncoder().encode(message);
        signedMessage = await provider.signMessage(encodedMessage, "utf8");
    } else {
        console.error("Provider not found");
    }

    //** Render */
    return (
        <div className="h-screen flex justify-center items-center">
            <Button size="lg">Click me</Button>
        </div>
    );
}
