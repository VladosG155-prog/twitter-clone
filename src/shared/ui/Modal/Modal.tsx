import { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { useOnClickOutside } from "@/shared/lib/hooks/useClickOutside";

import { IModalProps } from "./types";

export const Modal: FC<IModalProps> = ({ children, isOpen, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isOpen]);

  useOnClickOutside(ref, onClose);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed left-0 right-0 bottom-0 top-0 overflow-y-scroll bg-opacity-20 bg-primary flex justify-center items-center">
      <div ref={ref} className="bg-white dark:bg-darkBg rounded-lg w-[500px]">
        {children}
      </div>
    </div>,
    document.body
  );
};
