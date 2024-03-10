import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("load image", async () => {
  render(<Options optionType={"scoops"} />);

  //서버 데이터를 불러올 때는 비동기 처리가 필요함. await 과 find..By사용
  const getImages = await screen.findAllByRole("img", { name: /scoop$/i }); //img role의 name은 alt

  //test option count
  expect(getImages).toHaveLength(2);

  const altTexts = getImages.map((img) => img.alt);

  //test option name
  expect(altTexts).toEqual(["Mint scoop", "Vanilla scoop"]);
});
