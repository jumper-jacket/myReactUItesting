import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import UserForm from '../src/components/UserForm';

describe("UserForm", () => {
  test("UserFormが描画されているか", () => {
    render(<UserForm />);
    expect(screen.getByTestId("form"));
  });

  test("送信ボタンが表示されているか", () => {
    render(<UserForm />)
    expect(screen.getByRole("button", { name: "送信" }));
  });

  test("名前の入力するホームがあるか", () => {
    render(<UserForm />);
    expect(screen.getByRole("textbox",{ name: "ユーザー名"}));
  });

  test.todo("メールアドレスの入力ホームがあるか");
  test.todo("パスワードの入力ホームはあるか");
  test.todo("パスワードの入力ホームはあるか");
  test.todo("全て入力できるまで送信ボタンは押せないか");
});
