"use client";

import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import { useAuth } from "@/features/auth/model/useAuth";
import {
  SignupFormValues,
  useSignupSchema,
} from "@/features/auth/model/hooks/useSignupSchema";
import { FormFieldType } from "@/shared/ui/Form/types";
import { EyeSlashIcon } from "@/shared/ui/Form/icons/EyeSlashIcon";
import { EyeIcon } from "@/shared/ui/Form/icons/EyeIcon";
import { useLocale } from "@/shared/hooks/useLocale";
import { useState } from "react";
import { Form } from "@/shared/ui/Form/Form";

export const SignupForm = () => {
  const { signup, isSigningUp } = useAuth();
  const signupSchema = useSignupSchema();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const { t } = useLocale();

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  const fields: FormFieldType[] = [
    {
      name: "email",
      label: t.auth.email,
      type: "email",
      placeholder: t.auth.enterEmail,
      required: true,
      autoComplete: "new-password",
      className: "w-full",
    },
    {
      name: "password",
      label: t.auth.password,
      type: "password",
      placeholder: t.auth.enterPassword,
      required: true,
      autoComplete: "new-password",
      className: "w-full",
      endContent: (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="focus:outline-none"
        >
          {isPasswordVisible ? (
            <EyeSlashIcon className="w-4 h-4" />
          ) : (
            <EyeIcon className="w-4 h-4" />
          )}
        </button>
      ),
    },
    {
      name: "confirmPassword",
      label: t.auth.confirmPassword,
      type: "password",
      placeholder: t.auth.enterConfirmPassword,
      required: true,
      autoComplete: "new-password",
      className: "w-full",
      endContent: (
        <button
          type="button"
          onClick={toggleConfirmPasswordVisibility}
          className="focus:outline-none"
        >
          {isConfirmPasswordVisible ? (
            <EyeSlashIcon className="w-4 h-4" />
          ) : (
            <EyeIcon className="w-4 h-4" />
          )}
        </button>
      ),
    },
    {
      name: "person.firstName",
      label: t.auth.firstName,
      type: "text",
      placeholder: t.auth.enterFirstName,
      autoComplete: "off",
      className: "w-full",
    },
    {
      name: "person.lastName",
      label: t.auth.lastName,
      type: "text",
      placeholder: t.auth.enterLastName,
      autoComplete: "off",
      className: "w-full",
    },
    {
      name: "person.patronymicName",
      label: t.auth.patronymic,
      type: "text",
      placeholder: t.auth.enterPatronymic,
      autoComplete: "off",
      className: "w-full f",
    },
  ];

  const handleSubmit = (values: SignupFormValues) => {
    const { ...submitData } = values;
    signup(submitData);
  };

  return (
    <Card className="w-full bg-content1">
      <CardHeader className="flex flex-col gap-1 px-6 pt-6">
        <h1 className="text-xl font-medium">{t.auth.createAccount}</h1>
        <p className="text-sm text-default-500">{t.auth.fillInformation}</p>
      </CardHeader>
      <CardBody className="px-4 pb-6">
        <Form<typeof signupSchema>
          fields={fields}
          onSubmit={handleSubmit}
          schema={signupSchema}
          className="w-full"
          autoComplete="off"
          layout="adaptive"
          maxColumns={2}
        >
          <div className="space-y-4 mt-4">
            <Button
              type="submit"
              color="primary"
              isLoading={isSigningUp}
              className="w-full bg-primary-400 font-bold p-4 text-lg"
              size="lg"
            >
              {t.auth.signUp}
            </Button>
            <div className="flex justify-center items-center gap-2 pt-2">
              <span className="text-default-500 text-sm">
                {t.auth.haveAccount}
              </span>
              <Link
                href="/auth"
                className="text-primary-400 text-sm font-medium"
              >
                {t.auth.signIn}
              </Link>
            </div>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};
