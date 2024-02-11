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
 *테스트를 찾고 테스트틀 실행하고 단언을 만들어 통과/실패 여부를 결정함. 따라서 테스트 러너가 있어야 테스팅이 가능함.
 */

/*
expect : 일종의 matcher를 사용하여 단언 유형을 나타낸다. matcher는 Jest-DOM 에서 제공되며, matcher는 인자가 있을 수도 없을수도.
Jest-DOM? : jest의 확장으로서 DOM에 관련된 matcher를 추가할 수 있음.
*/

/*
 jest와 vitest가 작동하는 방식
 - 둘다 전역 test 메서드가 있으며 두가지 매개변수를 전달함(테스트 description, test function)
 - test function 인자 실행 시 오류가 발생하면 테스트가 실패함. 
 - 일반적으로 명시적으로 결과를 지정하지 않고 단언의 결과가 test function의 결과가 되며 즉 테스트 통과 여부를 결정하는것은 단언임
*/

/**
 *
 * TDD
 * - TDD란 코드 작성 전에 테스트를 작성하고 테스트에 통과하도록 코드를 작성하는 개발 방식이다.
 * -TDD의 장점은
 *    테스트를 프로세스의 한 부분으로 느끼도록 함. 테스트가 마지막에 해야하는 번거롭고 부가적인 일이 아닌, 코딩 프로세스의 일부로 통합함.
 *    변경사항이 수정될때마다 모든 테스트를 수동으로 테스트하는것이 아니라, 변경 사항이 생길 때마다 자동으로 모든 테스트를 실행할 수 있어 효율적임
 */

/**
 * RTL의 역할? 왜 쓸까?
 * RTL은 테스트를 위한 가상돔을 생성하고 돔과 상호작용하기 위한 유틸리티도 제공한다. 브라우저 없이도 이를 가능하게 한다.
 * 유닛 테스트 : 함수나 개별의 컴포넌트 단위로 테스트를 진행하는 것.다른 코드의 유닛과 상호 작용하는 것을 테스트하지 않음.
 * 통합 테스트 : 여러 유닛이 함께 작동하는 방식을 테스트하여 유닛 간 상호작용을 테스트 함.
 * 기능 테스트 : 소프트웨어의 특정 기능을 테스트 하는것. ex) 폼 제출하기. 기능테스트의 개념은 코드가 아닌 동작을 테스트 하는 것
 * 인수 테스트(E2E 테스트) : 실제 브라우저와 서버 를 상용하여 테스트.
 */

/**
 * 유닛 테스트 vs 기능테스트
 * 유닛테스트는 테스트를 최대한 격리시킨다. 함수나 컴포넌트를 테스트할 때 의존성을 표시하여 다른 컴포넌트나 함수에 의존성이 있다면 실제 버전 대신 테스트 버전을 사용한다.
 * 따라서 문제가 발생하거나 테스트에 실패 시 생태계의 다른 것이 아니라 테스트에 실패하게 만드는 테스트 유닛이 문제임을 알 수 있음
 * 또한 내부 테스트도 진행하는데, 격리 상태에서 컴포넌트를 테스트하면 때로는 상태의 차이점에 관해서만 테스트하게 되기 때문이고 애플리케이션 변경 사항을 확인하는 다른 컴포넌트가 없기 때문이다
 */
