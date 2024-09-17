"use client";

import { useCallback, useMemo, useState } from "react";
import { Modal } from "@club/ui";

export function useCreateLinkModal() {
  const [showCreateLinkModal, setShowCreateLinkModal] = useState<boolean>(false);

  const CreateModalCallback = useCallback(() => (       // return
    <Modal
      showModal={showCreateLinkModal}
      setShowModal={setShowCreateLinkModal}
    >
      <p>I am a Modal from Context API</p>
    </Modal>
  ),[showCreateLinkModal , setShowCreateLinkModal])

  return useMemo(()=>{
     return {
         showCreateLinkModal,
         CreateModalCallback,
         setShowCreateLinkModal,
     }
  },[showCreateLinkModal,CreateModalCallback, setShowCreateLinkModal])
} 
