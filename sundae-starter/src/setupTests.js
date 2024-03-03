import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mock/server";

beforeAll(() => server.listen()); //모든 테스트가 실행되기 전에 모킹을 활성화.
afterEach(() => server.resetHandlers()); //테스트 사이에 요청 핸들러를 초기화
afterAll(() => server.close()); //모든 테스트가 실행된 후 네이티브 요청 발행 모듈을 복원
