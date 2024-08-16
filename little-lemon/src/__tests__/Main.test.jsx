import { initializeTimes, updateTimes } from '../Components/Main';  // Adjust the import path as necessary

test.skip('initializeTimes returns correct initial times', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const actualTimes = initializeTimes();
    expect(actualTimes).toEqual(expectedTimes);
});

test.skip('updateTimes returns the same state when no action is passed', () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = updateTimes(initialState, action);
    expect(newState).toEqual(initialState);
});
