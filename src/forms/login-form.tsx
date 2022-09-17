import React, { FC, useState, ChangeEvent, FormEventHandler } from "react";
import {
  FormContainer,
  FormInput,
  Button,
  ButtonsContainer,
  TestDataText,
  TestDataHeader,
  FormTitle
} from "./form-styles";
import { useDispatch } from "../types/hooks";
import loginUserThunk from "../thunks/login-user-thunk";

interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const clearFormValues = () => {
    setFormValues({ email: "", password: "" });
  };

  const submitForm: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(loginUserThunk(formValues));
  };

  return (
    <FormContainer onSubmit={submitForm}>
      <TestDataHeader>Тестовые данные</TestDataHeader>
      <TestDataText>
        Email: testuser@mail.ru
      </TestDataText>
      <TestDataText>
        Пароль: testpassword
      </TestDataText>
      <FormTitle>
        Войти
      </FormTitle>
      <FormInput
        value={formValues.email}
        onChange={onChangeEmail}
        type="email"
        placeholder="Введите свой email"
      />
      <FormInput
        value={formValues.password}
        onChange={onChangePassword}
        type="password"
        placeholder="Введите пароль"
      />
      <ButtonsContainer>
        <Button type="reset" onClick={clearFormValues}>
          Очистить
        </Button>
        <Button type="submit">Войти</Button>
      </ButtonsContainer>
    </FormContainer>
  );
};

export default LoginForm;
