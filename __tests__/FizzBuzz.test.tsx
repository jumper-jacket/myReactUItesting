import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import FizzBuzz from '../src/components/FizzBuzz';

describe("Fizz Buzzのテストを書く", () => {

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
    it("入力エリアに 3 を入力したら出力エリアに Fizz を出力する", () => {
        const { getByTestId } = render(<FizzBuzz />);
        const inputElement = screen.getByRole("spinbutton");
        const outputElement = screen.getByTestId("output");
        fireEvent.change(inputElement, { target: {value: "3"}})
        expect(outputElement.textContent).toBe("Fizz");
    });
    it("入力エリアに 4 を入力したら出力エリアに 4 を出力する", () => {
        const { getByTestId } = render(<FizzBuzz />);
        const inputElement = screen.getByRole("spinbutton");
        const outputElement = screen.getByTestId("output");
        fireEvent.change(inputElement, { target: {value: "4"}})
        expect(outputElement.textContent).toBe("4");
    });
    it("入力エリアに 5 を入力したら出力エリアに Buzz を出力する", () => {
        const { getByTestId } = render(<FizzBuzz />);
        const inputElement = screen.getByRole("spinbutton");
        const outputElement = screen.getByTestId("output");
        fireEvent.change(inputElement, { target: {value: "5"}})
        expect(outputElement.textContent).toBe("Buzz");
    });
    it("入力エリアに 6 を入力したら出力エリアに Fizz を出力する", () => {
        const { getByTestId } = render(<FizzBuzz />);
        const inputElement = screen.getByRole("spinbutton");
        const outputElement = screen.getByTestId("output");
        fireEvent.change(inputElement, { target: {value: "6"}})
        expect(outputElement.textContent).toBe("Fizz");
    });
    it("入力エリアに 15 を入力したら出力エリアに FizzBuzz と出力する", () => {
        const { getByTestId } = render(<FizzBuzz />);
        const inputElement = screen.getByRole("spinbutton");
        const outputElement = screen.getByTestId("output");
        fireEvent.change(inputElement, { target: {value: "15"}})
        expect(outputElement.textContent).toBe("FizzBuzz");
    });
    it("入力エリアに 30 を入力したら出力エリアに FizzBuzz と出力する", () => {
        const { getByTestId } = render(<FizzBuzz />);
        const inputElement = screen.getByRole("spinbutton");
        const outputElement = screen.getByTestId("output");
        fireEvent.change(inputElement, { target: {value: "30"}})
        expect(outputElement.textContent).toBe("FizzBuzz");
    });


});