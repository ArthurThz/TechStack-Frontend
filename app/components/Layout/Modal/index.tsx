import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

const Modal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col w-full h-auto items-center bg-white">
      <Dialog.Trigger className="bg-green-haze-700 w-auto flex flex-row gap-5 items-center py-4 px-5 rounded-md transition-all text-white hover:bg-green-haze-900">
        <FiPlusCircle size={20} />
        Nova publicação
      </Dialog.Trigger>
    </div>
  );
};

export default Modal;
