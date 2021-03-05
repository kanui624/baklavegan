module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@animations(.*)$": "<rootDir>/animations$1",
    "^@styles(.*)$": "<rootDir>/styles$1",
    "^@redux(.*)$": "<rootDir>/redux$1",
  },
};
