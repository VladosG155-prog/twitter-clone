import { FC, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { ROUTES } from "@/shared/const/routes";
import { Button, Input } from "@/shared/ui";
import { Select } from "@/shared/ui/Select/Select";

import { getDays, MONTHS, userDateFields, userFields, YEARS } from "../config";
import { RegistrationScheme } from "../model/registrationScheme";
import { IRegistrationFormData } from "../types";

import { IOption, IRegistrationFormProps } from "./types";

export const RegistrationForm: FC<IRegistrationFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IRegistrationFormData>({
    resolver: zodResolver(RegistrationScheme),
    mode: "onBlur",
    defaultValues: {
      name: "",
      password: "",
      tel: "",
      email: "",
      month: "",
      day: "",
      year: "",
    },
  });

  const handleSumbitForm = (data: IRegistrationFormData) => {
    onSubmit(data);
  };

  const [year, month] = watch(["year", "month"]);

  const DAYS = useMemo(() => getDays(month, year), [month, year]);

  const selectOptions: Record<"month" | "day" | "year", IOption[]> = {
    month: MONTHS,
    day: DAYS,
    year: YEARS,
  };

  const isSubmitDisabled = Object.keys(errors).length > 0;

  return (
    <div className="w-full">
      {userFields.map(({ fieldName, placeholder, type }) => (
        <Controller
          name={fieldName}
          key={fieldName}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              role={fieldName}
              error={fieldState.error}
              placeholder={placeholder}
              type={type}
            />
          )}
        />
      ))}
      <Link className="text-primary hover:opacity-65" to={ROUTES.AUTH}>
        Use email
      </Link>
      <h2 className="font-bold text-start self-start text-xl mt-2 mb-5">
        Date of birth
      </h2>
      <p className="text-base text-gray-500 mb-3">
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
        Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
        nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
        dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
      </p>

      <div className="grid grid-cols-4 gap-5">
        {userDateFields.map(({ fieldName, placeholder }, index) => (
          <Controller
            name={fieldName}
            key={fieldName}
            control={control}
            render={({ field }) => (
              <Select
                className={index === 0 ? "col-span-2" : ""}
                options={selectOptions[fieldName]}
                placeholder={placeholder}
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
        ))}
      </div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(handleSumbitForm)();
        }}
        disabled={isSubmitDisabled}
        role="submit"
        text="Next"
        className="mt-3"
      />
    </div>
  );
};
