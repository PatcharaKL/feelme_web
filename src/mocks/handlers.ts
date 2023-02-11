import { happiness_points } from './mock-data';
import { DefaultBodyType, MockedRequest, RestHandler, rest } from "msw";

const testUrl = (baseUrl: string) => {
  return `${import.meta.env.VITE_BASE_URL}${baseUrl}`;
};

export const handlers = [
  rest.get(testUrl("/health-check"), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "Healthy",
      })
    );
  }),

  rest.get(testUrl("/users/1/happiness-points"), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(happiness_points)
    );
  }),
];
