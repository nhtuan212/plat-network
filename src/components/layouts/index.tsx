"use client";

import React, { useEffect } from "react";
import Header from "./Header";
import Alert from "../Alert";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../Modal";
import { useModalStore } from "@/stores/useModalStore";
import { useAlertStore } from "@/stores/useAlertStore";

export default function Layouts({ children }: { children: React.ReactNode }) {
    //** Stores */
    const { modal, getModal } = useModalStore();
    const { alert, getAlert } = useAlertStore();

    //** Render */
    return (
        <main className="h-screen">
            <Header />

            <section className="container py-4">{children}</section>

            <Modal
                isOpen={modal.isOpen}
                size={modal.size}
                onOpenChange={(isOpen: boolean) => getModal({ isOpen })}
            >
                {modal.modalHeader && (
                    <ModalHeader>{modal.modalHeader}</ModalHeader>
                )}
                {modal.modalBody && <ModalBody>{modal.modalBody}</ModalBody>}
                {modal.modalFooter && (
                    <ModalFooter>{modal.modalFooter}</ModalFooter>
                )}
            </Modal>

            <Alert
                {...alert}
                onClose={() => {
                    getAlert({ isOpen: false });
                }}
            >
                {alert.alertContent}
            </Alert>
        </main>
    );
}
