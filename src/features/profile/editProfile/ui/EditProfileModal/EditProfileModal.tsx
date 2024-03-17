import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { selectUser } from "@/entities/session";
import { UPDATE_PROFILE } from "@/features/profile/model/actions";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Avatar, Button, ImageWithUpload, Input } from "@/shared/ui";
import { Icon } from "@/shared/ui/Icon/Icon";

import { userFields } from "../../config";
import { EditProfileScheme } from "../../model/EditProfileScheme";
import { IEditProfileFormData } from "../../types";

import { IEditModalProps } from "./types";

export const EditProfileModal: FC<IEditModalProps> = ({ onClose }) => {
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  const [file, setFile] = useState<File | null>(null);

  const { handleSubmit, control } = useForm<IEditProfileFormData>({
    resolver: zodResolver(EditProfileScheme),
    defaultValues: {
      name: user.name,
      bio: user.bio,
      profileId: user.profileId,
      password: "",
      phone: user.phone,
      email: user.email,
      month: "",
      day: "",
      year: "",
    },
  });
  const uploadedFileUrl = file ? URL.createObjectURL(file) : "";

  const onSubmit = (data: IEditProfileFormData) => {
    console.log(data);
    dispatch(
      UPDATE_PROFILE({
        userData: { ...data, id: user.id },
        userAvatar: file || undefined,
      })
    );
  };

  return (
    <div className="relative">
      <div className="sticky border-b-2 border-gray-300 p-5 top-0 left-0 w-full bg-opacity-0  flex items-center justify-between">
        <i
          onClick={onClose}
          className="w-10 h-10 flex justify-center rounded-full transition-all cursor-pointer items-center hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          <Icon
            name="close"
            width={15}
            height={15}
            className="text-white dark:fill-white "
          />
        </i>
        <h2 className="font-bold text-1.75xl text-white ">Edit profile</h2>
        <Button
          text="Save"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="max-w-max mb-0"
        />
      </div>

      <div className="pl-5 pt-5">
        <ImageWithUpload onChange={setFile}>
          <Avatar size="lg" url={uploadedFileUrl || user?.avatar} />
        </ImageWithUpload>
      </div>
      <form className="p-5 pt-14">
        {userFields.map(({ fieldName, placeholder, type }) => (
          <Controller
            name={fieldName}
            key={fieldName}
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                error={fieldState.error}
                placeholder={placeholder}
                type={type}
              />
            )}
          />
        ))}
      </form>
    </div>
  );
};
