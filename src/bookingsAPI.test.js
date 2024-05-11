// api.test.js
import { fetchAPI, submitAPI } from './path-to-your-api-file';

describe('API functions', () => {
  describe('fetchAPI', () => {
    test('returns an array of time slots based on the seed', () => {
      const date = '2023-05-10'; // Use a fixed date for predictable results
      const result = fetchAPI(date);

      // Since fetchAPI uses random numbers, the result may vary,
      // but we can check if it contains valid time slots.
      result.forEach((time) => {
        expect(['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30']).toContain(time);
      });
    });

    test('returns a different array for a different date', () => {
      const date1 = '2023-05-10';
      const date2 = '2023-05-11';
      const result1 = fetchAPI(date1);
      const result2 = fetchAPI(date2);

      expect(result1).not.toEqual(result2);
    });
  });

  describe('submitAPI', () => {
    test('returns true when called', () => {
      const formData = { name: 'John Doe', email: 'john@example.com' }; // Example form data
      const result = submitAPI(formData);

      expect(result).toBe(true);
    });
  });
});
