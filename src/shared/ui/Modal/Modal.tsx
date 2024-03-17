import { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { useOnClickOutside } from "@/shared/lib/hooks/useClickOutside";

import { IModalProps } from "./types";

export const Modal: FC<IModalProps> = ({ children, isOpen, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
    document.body.style.paddingRight = paddingOffset;
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.paddingRight = "0px";
      document.body.style.overflowY = "scroll";
    };
  }, [isOpen]);

  useOnClickOutside(ref, onClose);

  if (!isOpen) return null;

  return createPortal(
    <div
      data-testid="modal"
      className="fixed left-0 animate-fadeIn right-0 overflow-hidden bottom-0 top-0 bg-opacity-20 bg-primary flex justify-center items-center"
    >
      <div ref={ref} className="bg-white dark:bg-darkBg rounded-lg w-[500px]">
        {children}
      </div>
    </div>,
    document.body
  );
};
