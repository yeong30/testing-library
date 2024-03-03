import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/scoops", ({ request }) => {
    return HttpResponse.json([
      {
        name: "Mint",
        imagePath: "/images/mint-chip.png",
      },
      {
        name: "Vanilla",
        imagePath: "/images/vanilla.png",
      },
    ]);
  }),
];
