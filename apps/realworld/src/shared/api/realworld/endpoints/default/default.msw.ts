/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Conduit API
 * Conduit API
 * OpenAPI spec version: 1.0.0
 */
import { rest } from 'msw';
import { faker } from '@faker-js/faker';

export const getGetTagsMock = () => ({
  tags: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() =>
    faker.random.word(),
  ),
});

export const getDefaultMSW = () => [
  rest.get('*/tags', (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json(getGetTagsMock()));
  }),
];