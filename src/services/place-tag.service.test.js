import { fetchPlaceTags } from '../services/place-tag.service';
import { config } from '../config';

jest.mock('../config', () => ({
  config: {
    placeTagApiEndpoint: 'https://mock-api.com/tags'
  },
}));

describe('fetchPlaceTags', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch place tags successfully', async () => {
    const mockTags = [{ id: 1, name: 'Nature' }];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockTags,
    });

    const result = await fetchPlaceTags();
    expect(fetch).toHaveBeenCalledWith('https://mock-api.com/tags');
    expect(result).toEqual(mockTags);
  });

  it('should throw an error when response is not ok', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchPlaceTags()).rejects.toThrow('Failed to fetch place tags');
  });
});
