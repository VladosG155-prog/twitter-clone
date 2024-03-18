import { useState } from "react";

import { Button, Modal } from "@/shared/ui";

import { EditProfileModal } from "../EditProfileModal/EditProfileModal";

export const EditProfile = () => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const handleClickButton = () => {
    setIsShowEditModal(true);
  };

  return (
    <div>
      <Modal onClose={() => setIsShowEditModal(false)} isOpen={isShowEditModal}>
        <EditProfileModal onClose={() => setIsShowEditModal(false)} />
      </Modal>

      <Button
        text="Edit profile"
        variant="outlined"
        onClick={handleClickButton}
      />
    </div>
  );
};
