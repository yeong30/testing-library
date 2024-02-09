import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/i); //screen.getByText : DOM에 learn react 정규표현식 텍스트와 일치하는 요소를 찾음
  expect(headingElement).toBeInTheDocument(); // expect().toBeInTheDocument : headingElement가 문서안에 있다고 예측(단언)
});

/*
render : 시뮬레이터된 DOM을 만든다 . 해당 DOM을 통해 테스트에서 테스트 대상을 이해할 수 있다. 
 이렇게 render된 DOM에는 testing-library/react에서 제공하는 전역객체 screen을 통해 액세스할 수 있다. 
*/

/**
 * react testing-library:
 * 브라우저 없이 테스트를 할 때 시뮬레이션된 DOM을 제공함.
 * 이를 통해 DOM의 결과물을 확인할 수 있음. 이것이 react testing-librar의 역할
 *
 * test runner (vitest , jest)
 *테스트를 찾고 테스트틀 실행하고 테스트이 통과/실패 여부를 결정함
 */
