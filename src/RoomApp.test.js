import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RoomApp from './RoomApp';

const server = setupServer(
  rest.get('https://wetransfer.github.io/rooms.json', (req, res, ctx) => {
    return res(
      ctx.json({
        rooms: [
          {
            name: 'Test Room',
            spots: 10,
            thumbnail: 'https://test.com/img.png',
          },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays a room', async () => {
  render(<RoomApp />);

  await waitFor(() => screen.getByText('Book!'));

  expect(screen.getByText('Rooms')).toHaveTextContent('Rooms');
  expect(screen.getByText('Test Room')).toBeTruthy();
});

