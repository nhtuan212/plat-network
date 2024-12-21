"use client";

import React from "react";
import Button from "@/components/Button";

export default function HomePage() {
    //** Render */
    return (
        <div className="h-screen flex justify-center items-center">
            <Button
                size="lg"
                onPress={async () => {
                    const encodedMessage = new TextEncoder().encode(
                        "Message to sign"
                    );

                    await window.solana
                        .request({
                            method: "signMessage",
                            params: {
                                message: encodedMessage,
                                display: "utf8", //hex,utf8
                            },
                        })
                        .then((response: any) => {
                            console.log(response);
                        });
                }}
            >
                Click me
            </Button>
        </div>
    );
}
