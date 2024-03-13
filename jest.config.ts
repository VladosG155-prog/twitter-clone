export default {
  preset: "ts-jest",

  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper: {
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
