module.exports = {
  "extends": ["eslint:recommended", "plugin:security/recommended"], // Use eslint-plugin-security
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "no-eval": "error",
    "no-new-wrappers": "error",
    "no-template-curly-in-string": "error",
    "no-unsafe-regex": "error",
    "security/detect-non-literal-regexp": "error", // Example of a security-related rule
    // Add more security rules as required
  }
};
