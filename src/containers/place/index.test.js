import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { PlaceContainer } from './index';
import { fetchPlaces } from '../../services/place.service';
import { fetchPlaceTags } from '../../services/place-tag.service';
import '@testing-library/jest-dom';

jest.mock('../../services/place.service', () => ({
  fetchPlaces: jest.fn(),
}));

jest.mock('../../services/place-tag.service', () => ({
  fetchPlaceTags: jest.fn(),
}));

describe('PlaceContainer', () => {
  it('fetches places and tags, then renders Places with transformed data', async () => {
    fetchPlaces.mockResolvedValue([
      {
        id: 1,
        name: 'Place One',
        img_url: 'img1.jpg',
        body: 'Description for place one',
        tags: [101, 102],
      },
    ]);

    fetchPlaceTags.mockResolvedValue([
      { id: 101, name: 'Nature' },
      { id: 102, name: 'Popular' },
    ]);

    render(<PlaceContainer />);

    await waitFor(() => {
      expect(screen.getByTestId('card-wrapper')).toBeInTheDocument();
    });

    expect(screen.getByText('Place One')).toBeInTheDocument();

    expect(fetchPlaces).toHaveBeenCalled();
    expect(fetchPlaceTags).toHaveBeenCalled();
  });
});
