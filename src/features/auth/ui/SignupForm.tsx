"use client";

import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import { useAuth } from "@/features/auth/model/useAuth";
import {
  SignupFormValues,
  useSignupSchema,
} from "@/features/auth/model/hooks/useSignupSchema";
import { FormFieldType } from "@/shared/ui/Form/types";
import { t } from "@/shared/config/localization";
import { Form } from "@/shared/ui/Form/Form";
import { useState } from "react";
import { EyeSlashIcon } from "@/shared/ui/Form/icons/EyeSlashIcon";
import { EyeIcon } from "@/shared/ui/Form/icons/EyeIcon";

export const SignupForm = () => {
  const { signup, isSigningUp } = useAuth();
  const signupSchema = useSignupSchema();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

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
      className: "w-full",
    },
  ];

  const handleSubmit = (values: SignupFormValues) => {
    const { ...submitData } = values;
    signup(submitData);
  };

  return (
    <Card className="w-full max-w-[800px] dark:bg-content1">
      <CardHeader className="flex justify-between items-center px-6 py-4">
        <div className="flex flex-col">
          <p className="text-md font-bold">{t.auth.createAccount}</p>
          <p className="text-small text-default-500">
            {t.auth.fillInformation}
          </p>
        </div>
      </CardHeader>
      <CardBody className="w-full px-6">
        <Form<typeof signupSchema>
          fields={fields}
          onSubmit={handleSubmit}
          schema={signupSchema}
          className="w-full"
          autoComplete="off"
          layout="grid"
        >
          <div className="flex flex-col gap-2">
            <Button
              type="submit"
              color="primary"
              isLoading={isSigningUp}
              className="w-full font-bold"
            >
              {t.auth.signUp}
            </Button>
            <div className="flex justify-center items-center gap-2">
              <span className="text-small text-default-500">
                {t.auth.haveAccount}
              </span>
              <Link href="/auth" size="sm" className="text-primary font-bold">
                {t.auth.signIn}
              </Link>
            </div>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};
