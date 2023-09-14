# @lofty87/code-convention

<br />

Typescript 기반 React, Next, Expo 프로젝트에서 사용할 수 있는 Code Convention ([Prettier](https://prettier.io/), [ESLint](https://eslint.org/)) 입니다. Code Convention 을 잡고 프로젝트를 진행하게 되면, 나 또는 팀원들이 모두 일관성 있는 코드를 작성하게 되어 코드 관리가 쉽고 유지 보수에 용이하다는 장점이 있습니다.

아래와 같이 프로젝트를 설정할 경우, `F11` 과 파일 저장만으로 자동 **Prettier Formatting** 과 **Eslint Formatting** 이 가능해집니다.

<br />

## 1. Prerequisite

- typescript@>=4.6.3
  - tsconfig.json
- eslint@>=8.33.0
- VSCode Extensions
  - Prettier - Code formatter
  - ESLint

<br />

## 2. Dependencies

- [@lofty87/prettier-config@^1.0.4](https://github.com/lofty87/code-convention/tree/master/prettier-config)
- [@lofty87/eslint-config@^3.0.6](https://github.com/lofty87/code-convention/tree/master/eslint-config)
  - @typescript-eslint/eslint-plugin@^5.50.0
  - @typescript-eslint/parser@^5.50.0
  - eslint-plugin-import@^2.27.5
  - eslint-plugin-jsx-a11y@^6.7.1
  - eslint-plugin-react@^7.32.2
  - eslint-plugin-react-hooks@^4.6.0

<br />

## 3. Installation

Using npm :

```bash
npm install --save-dev @lofty87/code-convention
```

<br />

## 4. Configuration

**1. Prettier Formatting**

프로젝트 폴더(root)에 `.prettierrc.json` 파일을 생성하고 아래 내용을 추가합니다.

```json
"@lofty87/prettier-config"
```

VSCode Preferences 의 Settings 안에 아래 내용을 추가하고 Keyboard Shortcuts 안에 Format Document 값을 `F11` 로 설정합니다.

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[graphql]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
}
```

자, 이제 `F11` 을 누르면 **Prettier Formatting** 이 가능합니다.

<br />

**2. ESLint Formatting**

프로젝트 폴더(root)에 `.eslintrc.json` 파일을 생성하고 아래 내용을 추가합니다.

```json
{
  "extends": "@lofty87/eslint-config",
  "rules": {}
}
```

VSCode Preferences 의 Settings 안에 아래 내용을 추가합니다.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
}
```

자, 이제 파일을 저장하면 자동으로 **Eslint Formatting** 이 가능합니다.
