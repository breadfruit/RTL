const { defaults } = require('ts-jest/presets');

module.exports = {
  ...defaults,
  preset: 'react-native',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  // 定义测试的文件目录，与配置文件同级目录下的 tests 文件夹内的 .tsx/.jsx 后缀名文件
  testRegex: '(/tests/.*\\.(test|spec))\\.[tj]sx?$',
  // 定义文件的编译方式
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // 定义了忽略进行 jest 执行的依赖包
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@testing-library|react-navigation|@react-navigation/.*|@react-native-community)/)',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$'],
  // 缓存文件生成的目录地址，注意在.gitignore 中忽略
  cacheDirectory: '.jest/cache',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^[@./a-zA-Z0-9$_-]+\\.(png|gif)$': '<rootDir>/node_modules/react-native/Libraries/Image/RelativeImageStub',
  },
};