"use client";

import { useState } from "react";
import { Modal } from "@club/ui";

export function useCreateLinkModal() {
  const [showCreateLinkModal, setShowCreateLinkModal] = useState<boolean>(false);

  const CreateModalCallback = () => (
    <Modal
      showModal={showCreateLinkModal}
      setShowModal={setShowCreateLinkModal}
    >
      <p>I am a Modal from Context API</p>
    </Modal>
  );

  return {
    showCreateLinkModal,
    CreateModalCallback,
    setShowCreateLinkModal,
  };
}
