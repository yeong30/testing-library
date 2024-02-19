import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/i); //screen.getByText : DOM에 learn react 정규표현식 텍스트와 일치하는 요소를 찾음
  expect(headingElement).toBeInTheDocument(); // expect().toBeInTheDocument : headingElement가 문서안에 있다고 예측(단언)
});
