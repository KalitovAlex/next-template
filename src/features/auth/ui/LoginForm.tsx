"use client";

import { FormFieldType } from "@/shared/ui/Form/types";
import { useAuth } from "@/features/auth/model/useAuth";
import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import {
  LoginFormValues,
  useLoginSchema,
} from "@/features/auth/model/hooks/useLoginSchema";
import { t } from "@/shared/config/localization";
import { Form } from "@/shared/ui/Form/Form";

export const LoginForm = () => {
  const { login, isLoading } = useAuth();
  const loginSchema = useLoginSchema();

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
    },
  ];

  const handleSubmit = (values: LoginFormValues) => {
    login(values);
  };

  return (
    <Card className="w-full bg-content1">
      <CardHeader className="flex flex-col gap-1 px-6 pt-6">
        <h1 className="text-xl font-medium">{t.auth.welcomeBack}</h1>
        <p className="text-sm text-default-500">{t.auth.loginToContinue}</p>
      </CardHeader>
      <CardBody className="px-6 pb-6">
        <Form<typeof loginSchema>
          fields={fields}
          onSubmit={handleSubmit}
          schema={loginSchema}
          className="w-full"
          autoComplete="off"
          layout="flex"
        >
          <div className="space-y-4 mt-4">
            <Button
              type="submit"
              color="primary"
              isLoading={isLoading}
              className="w-full bg-primary-400 font-bold dark:bg-primary-900"
              size="lg"
            >
              {t.auth.signIn}
            </Button>
            <div className="flex justify-center items-center gap-2 pt-2">
              <span className="text-default-500 text-sm">
                {t.auth.noAccount}
              </span>
              <Link
                href="/register"
                className="text-primary-400 dark:text-primary-400 text-sm font-medium"
              >
                {t.auth.signUp}
              </Link>
            </div>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};
