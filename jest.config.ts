export default {
  preset: "ts-jest",

  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/fileMock.ts",
    "^@/(.*)": "<rootDir>/src/$1",
    "^(.+\\.svg)\\?react$": "<rootDir>/svg.tsx",
    "^(.+\\.svg)$": "<rootDir>/svg.tsx",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
    "^(.+\\.svg)": "jest-transformer-svg",
    "^(.+\\.svg)\\?react$": "jest-transformer-svg",
  },
};
