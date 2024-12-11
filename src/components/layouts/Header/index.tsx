"use client";

import React from "react";
import Button from "@/components/Button";
import { useModalStore } from "@/stores/useModalStore";
import WalletConnection from "@/components/WalletConnection";

const Header = () => {
    //** Stores */
    const { getModal } = useModalStore();

    //** Render */
    return (
        <div className="flex justify-center py-8 shadow-md">
            <div className="container flex justify-between">
                <div className="font-bold text-[30px]">Hello</div>
                <div>
                    <Button
                        onPress={() => {
                            getModal({
                                isOpen: true,
                                size: "3xl",
                                modalHeader: "Wallet connection",
                                modalBody: <WalletConnection />,
                            });
                        }}
                    >
                        Wallet connection
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
