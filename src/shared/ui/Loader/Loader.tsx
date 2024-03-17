import { Icon } from "../Icon/Icon";

export const Loader = () => {
  return (
    <div
      data-testid="loader"
      className="flex justify-center z-50 items-center fixed left-0 top-0 bottom-0 right-0 backdrop-blur-md"
    >
      <div className="animate-wave">
        <Icon
          name="twitter"
          width={120}
          height={120}
          className="text-primary"
        />
      </div>
    </div>
  );
};
