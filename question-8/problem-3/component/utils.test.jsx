import { add, fetchData } from '../utils/utils';


describe('Utility Functions', () => {
  test('add function correctly adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });



  test('fetchData function fetches data correctly', async () => {
    
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: 'test data' }),
      })
    );

    const data = await fetchData();
    expect(data).toEqual({ data: 'test data' });
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/data');
  });
});