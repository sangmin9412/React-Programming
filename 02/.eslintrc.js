module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'react-hooks',
  ],
  rules: {
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-vurly-newline': 'off',
    'linebreak-style': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off', // props의 type 체크하지않음
    'react/state-in-constructor': 'off', // class Component constructor 사용안함
    'no-unused-vars': 'off', // 사용하지않는 변수허용
    'no-sequences': 'off', // key값으로 index 사용허용
    'no-return-assign': 'off', // Arrow function should not return assignment no-return-assign
    'react/prefer-stateless-function': 'off', // 상탯값이 없는 컴포넌트를 클래스로 작성할 때 경고
    'max-len': 'off', // 너무 긴 글을 작성할 경우 개행 하도록 경고
    'import/prefer-default-export': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/no-cycle': 'off',
    'react/no-unused-state': 'off', // 사용되지 않는 멤버 필드 경고
  },
};
