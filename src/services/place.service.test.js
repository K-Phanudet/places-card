import { fetchPlaces } from '../services/place.service';
import { config } from '../config';

jest.mock('../config', () => ({
  config: {
    placeApiEndpoint: 'https://mock-api.com/places'
  },
}));

describe('fetchPlaces', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch places successfully', async () => {
    const mockPlaces = [{ id: 1, name: 'Beach', img_url: '', body: '', tags: [] }];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockPlaces,
    });

    const result = await fetchPlaces();
    expect(fetch).toHaveBeenCalledWith('https://mock-api.com/places');
    expect(result).toEqual(mockPlaces);
  });

  it('should throw an error when response is not ok', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchPlaces()).rejects.toThrow('Failed to fetch places');
  });
});
