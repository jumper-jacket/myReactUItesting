import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react'; 
import FizzBuzz from '../src/components/FizzBuzz';

describe("Fizz Buzzのテストを書く", () => {
    it.todo("入力エリアに3の倍数を入力したら Fizzを表示");
    it.todo("入力エリアに5の倍数を入力したら Buzzを表示");
    it.todo("入力エリアに15の倍数を入力したら Fizz Buzzを表示");
    it.todo("それ以外の数はそのまま表示");

    it("入力エリアに 1 を入力したら出力エリアに 1 を出力する", () => {
        const { getByTestId } = render(<FizzBuzz />);
        const inputElement = screen.getByRole("spinbutton");
        const outputElement = screen.getByTestId("output");
        fireEvent.change(inputElement, { target: {value: "1"}})
        expect(outputElement.textContent).toBe("1");
    });
    it("入力エリアに 2 を入力したら出力エリアに 2 を出力する", () => {
        const { getByTestId } = render(<FizzBuzz />);
        const inputElement = screen.getByRole("spinbutton");
        const outputElement = screen.getByTestId("output");
        fireEvent.change(inputElement, { target: {value: "2"}})
        expect(outputElement.textContent).toBe("2");
    });

})