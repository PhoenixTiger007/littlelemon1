module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transform JS and JSX files using babel-jest
    },
    testEnvironment: 'jsdom',  // Set the test environment to jsdom, necessary for React testing
    moduleFileExtensions: ['js', 'jsx'],  // Allow Jest to recognize .js and .jsx files
  };
   