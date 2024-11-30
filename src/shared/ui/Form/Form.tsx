"use client";

import {
  FormProps,
  FormFieldType,
  TextInputProps,
  DateInputProps,
  AutocompleteInputProps,
  PasswordInputProps,
  PhoneInputProps,
} from "./types";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInputs } from "./inputs";
import { cn } from "@nextui-org/react";

export const Form = <T extends z.ZodTypeAny>({
  fields,
  onSubmit,
  children,
  schema,
  className,
  layout = "flex",
  maxColumns = 2,
}: FormProps<T>) => {
  const methods = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const getLayoutClass = () => {
    switch (layout) {
      case "grid":
        return "grid grid-cols-1 md:grid-cols-2 gap-4";
      case "adaptive":
        return cn(
          "grid grid-cols-1 sm:grid-cols-2 gap-4",
          maxColumns === 3 && "lg:grid-cols-3"
        );
      case "flex":
      default:
        return "flex flex-col gap-4";
    }
  };

  const getGroupedFields = () => {
    if (layout !== "adaptive") return fields;

    const fullWidthFields = ["email", "password", "confirmPassword"];

    return fields.map((field) => ({
      ...field,
      className: cn(
        field.className,
        fullWidthFields.includes(field.name) ? "col-span-full" : "col-span-1"
      ),
    }));
  };

  const renderField = (field: FormFieldType) => {
    switch (field.type) {
      case "date":
        return (
          <FormInputs.date key={field.name} {...(field as DateInputProps)} />
        );
      case "autocomplete":
        return (
          <FormInputs.autocomplete
            key={field.name}
            {...(field as AutocompleteInputProps)}
          />
        );
      case "password":
        return (
          <FormInputs.password
            key={field.name}
            {...(field as PasswordInputProps)}
          />
        );
      case "tel":
        return (
          <FormInputs.tel key={field.name} {...(field as PhoneInputProps)} />
        );
      default:
        return (
          <FormInputs.text key={field.name} {...(field as TextInputProps)} />
        );
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={cn(className)}
        autoComplete="off"
      >
        <div style={{ display: "none" }}>
          <input type="text" name="username" autoComplete="username" />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </div>
        <div className={getLayoutClass()}>
          {getGroupedFields().map((field) => renderField(field))}
        </div>
        {children}
      </form>
    </FormProvider>
  );
};
