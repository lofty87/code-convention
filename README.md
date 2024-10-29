# @lofty87/code-convention

<br />

TypeScript 기반 React, Next, Expo 프로젝트에서 사용할 수 있는 Code Convention ([ESLint](https://eslint.org/), [Prettier](https://prettier.io/)) 입니다. Code Convention 을 잡고 프로젝트를 진행하게 되면, 나 또는 팀원들이 모두 일관성 있는 코드를 작성하게 되어 코드 관리가 쉽고 유지 보수에 용이하다는 장점이 있습니다. 또 코드가 통일성 있고 깔끔하게 되어 코드의 품질을 올릴 수 있습니다.

아래와 같이 프로젝트를 설정할 경우, 파일 저장만으로 자동 **ESLint Formatting** 과 **Prettier Formatting** 이 가능해집니다.

<br />

## 1. Prerequisite (required)

- typescript@>=4.6.3
  - tsconfig.json
- VSCode Extensions
  - ESLint
  - Prettier - Code formatter

<br />

## 2. Dependencies

- [@lofty87/eslint-config@^4.0.2](https://github.com/lofty87/code-convention/tree/master/eslint-config)
  - @typescript-eslint/eslint-plugin@^5.50.0
  - @typescript-eslint/parser@^5.50.0
  - eslint-plugin-import@^2.27.5
  - eslint-plugin-jsx-a11y@^6.7.1
  - eslint-plugin-react@^7.32.2
  - eslint-plugin-react-hooks@^4.6.0
- [@lofty87/prettier-config@^1.0.8](https://github.com/lofty87/code-convention/tree/master/prettier-config)
- eslint-config-prettier@^9.0.0 (충돌방지)

<br />

## 3. Installation

```bash
# npm
npm install @lofty87/code-convention eslint --save-dev

# yarn
yarn add @lofty87/code-convention eslint --dev
```

<br />

## 4. Configuration

**1. ESLint Formatting**

프로젝트 폴더(root)에 `.eslintrc.json` 파일을 생성하고 아래 내용을 추가합니다.

```json
{
  "extends": [
    "@lofty87/eslint-config",
    "prettier"
  ],
  "rules": {}
}
```

VSCode Preferences 의 Settings 안에 아래 내용을 추가합니다.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

자, 이제 파일을 저장하면 자동으로 **ESLint Formatting** 이 가능합니다.

<br />

**2. Prettier Formatting**

프로젝트 폴더(root)에 `.prettierrc.json` 파일을 생성하고 아래 내용을 추가합니다.

```json
"@lofty87/prettier-config"
```

VSCode Preferences 의 Settings 안에 아래 내용을 추가합니다.

```json
{
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

자, 이제 파일을 저장하면 자동으로 **Prettier Formatting** 이 가능합니다.
