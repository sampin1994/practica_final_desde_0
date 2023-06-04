const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/www',
    '<rootDir>/libs/shared/global',
    '<rootDir>/libs/shared/data',
    '<rootDir>/libs/shared/ui',
    '<rootDir>/libs/shared/form',
    '<rootDir>/libs/shared/layout',
    '<rootDir>/libs/domain/home',
    '<rootDir>/libs/domain/not-found',
    '<rootDir>/libs/domain/resource',
    '<rootDir>/libs/domain/category',
    '<rootDir>/libs/domain/resource-new',
    '<rootDir>/libs/domain/search',
    '<rootDir>/libs/domain/search-box',
    '<rootDir>/libs/shared/auth',
  ],
};
