import { Icon } from "../Icon/Icon";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center fixed left-0 top-0 bottom-0 right-0 backdrop-blur-md">
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
