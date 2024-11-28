import type { FormFieldType } from "@/shared/ui/Form/types";

export const signInFields: FormFieldType[] = [
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "example@mail.com",
    required: true,
  },
  {
    type: "password",
    name: "password",
    label: "Пароль",
    placeholder: "Введите пароль",
    required: true,
  },
];

export const signUpFields: FormFieldType[] = [
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "example@mail.com",
    required: true,
  },
  {
    type: "password",
    name: "password",
    label: "Пароль",
    placeholder: "Введите пароль",
    required: true,
  },
  {
    type: "text",
    name: "person.firstName",
    label: "Имя",
    placeholder: "Введите имя",
    required: true,
  },
  {
    type: "text",
    name: "person.lastName",
    label: "Фамилия",
    placeholder: "Введите фамилию",
    required: true,
  },
  {
    type: "text",
    name: "person.patronymic",
    label: "Отчество",
    placeholder: "Введите отчество",
  },
];
