import { useAppSelector } from "@/shared/model/hooks";
import { Toast } from "@/shared/ui/";

export const ToastContainer = () => {
  const toasts = useAppSelector((state) => state.app.toasts);

  if (!toasts.length) return null;

  return (
    <div className=" fixed bottom-2 left-5 w-[300px] gap-5 flex flex-col">
      {toasts.map(({ text, type, id }) => (
        <Toast key={id} id={id} text={text} type={type} />
      ))}
    </div>
  );
};
