import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { REGISTRATION } from "@/entities/session/model/actions";
import { ROUTES } from "@/shared/const/routes";
import { useAppDispatch } from "@/shared/model/hooks";
import { Button, Input } from "@/shared/ui";
import { Select } from "@/shared/ui/Select/Select";

import { getDays, MONTHS, userDateFields, userFields, YEARS } from "../config";
import { RegistrationScheme } from "../model/registrationScheme";
import { IRegistrationFormData } from "../types";

import { IOption } from "./interfaces";

export const RegistrationForm = () => {
  const { handleSubmit, control, watch } = useForm<IRegistrationFormData>({
    resolver: zodResolver(RegistrationScheme),
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

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit = (data: IRegistrationFormData) => {
    dispatch(REGISTRATION(data));
    navigate(ROUTES.AUTH);
  };

  const [year, month] = watch(["year", "month"]);

  const DAYS = useMemo(() => getDays(month, year), [month, year]);

  const selectOptions: Record<"month" | "day" | "year", IOption[]> = {
    month: MONTHS,
    day: DAYS,
    year: YEARS,
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
      <Button type="submit" text="Next" className="mt-3" />
    </form>
  );
};
