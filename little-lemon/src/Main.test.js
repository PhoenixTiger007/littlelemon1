import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from './api'; 


jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
}));


describe('initializeTimes', () => {
  test('should return an array of times from fetchAPI', () => {
    
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

   
    const result = initializeTimes();

    
    expect(fetchAPI).toHaveBeenCalledTimes(1); 
    expect(result).toEqual(mockTimes); 
  });
});


describe('updateTimes', () => {
  test('should return the times array from fetchAPI when action type is UPDATE_TIMES', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', date: '2023-08-19' };
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

   
    const result = updateTimes(initialState, action);

    
    expect(fetchAPI).toHaveBeenCalledWith(new Date(action.date));
    expect(result).toEqual(mockTimes); 
  });

  test('should return the same state if action type is not UPDATE_TIMES', () => {
    const initialState = ["17:00"];
    const action = { type: 'OTHER_ACTION' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });
});
