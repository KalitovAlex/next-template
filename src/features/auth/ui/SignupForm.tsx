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
import { useState } from "react";
import { Form } from "@/shared/ui/Form/Form";

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
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
      autoComplete: "new-password",
      className: "w-full",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
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
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password",
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
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      autoComplete: "off",
      className: "w-full",
    },
    {
      name: "person.lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      autoComplete: "off",
      className: "w-full",
    },
    {
      name: "person.patronymicName",
      label: "Patronymic",
      type: "text",
      placeholder: "Enter your patronymic",
      autoComplete: "off",
      className: "w-full",
    },
  ];

  const handleSubmit = (values: SignupFormValues) => {
    const { ...submitData } = values;
    signup(submitData);
  };

  return (
    <Card className="w-full bg-content1">
      <CardHeader className="flex flex-col gap-1 px-6 pt-6">
        <h1 className="text-xl font-medium">Создать аккаунт</h1>
        <p className="text-sm text-default-500">Заполните информацию</p>
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
              className="w-full bg-primary font-bold bg-primary-400"
              size="lg"
            >
              Зарегистрироваться
            </Button>
            <div className="flex justify-center items-center gap-2 pt-2">
              <span className="text-default-500 text-sm">
                Уже есть аккаунт?
              </span>
              <Link
                href="/auth"
                className="text-primary-400 text-sm font-medium"
              >
                Войти
              </Link>
            </div>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};
