# MusicTracker-frontend <!-- omit in toc -->

Deployed at: https://spotify-music-tracker.netlify.app/

Music tracker - music tracker using Spotify API application created using **React**, **React Query** and **TypeScript**.

If you have problems with the code in this repository, please file issues & bug reports [here](https://github.com/tknura/MusicShare-frontend/issues)!

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Project structure](#project-structure)
  - [Imports and exports](#imports-and-exports)
    - [Import](#import)
    - [Export](#export)
  - [Styling](#styling)
- [Contributing](#contributing)
  - [Commit messages](#commit-messages)
  - [Branch names](#branch-names)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run the project you will need following globally installed tools:
* **Node.js** v14 or newer ([download](https://nodejs.org/en/download/), [nvm](https://github.com/nvm-sh/nvm), [nvm-windows](https://github.com/coreybutler/nvm-windows))

## Development

### Project structure

The basic structure of the project is as follows:

```
📦project
 ┗ 📂src
   ┣ 📂components       # common components
   ┃  ┣ 📂data          # components for showing simple data
   ┃  ┣ 📂forms         # form components
   ┃  ┣ 📂navigation    # components which are used for navigating
   ┃  ┣ 📂providers     # hoc for contexts
   ┃  ┗ 📂routes        # routes declaration componnets
   ┣ 📂constants        # project constant values
   ┣ 📂i18n             # internacionalizations
   ┣ 📂schemas          # validation schemas
   ┣ 📂hooks            # common hooks
   ┣ 📂screens          # feature scoped screens with their components
   ┣ 📂types            # typescript types
   ┗ 📂utils            # common utility functions
```

When creating a new directory in the tree, add it in the description.

### Imports and exports

#### Import

The project supports absolute imports from the `src` directory. Preferred import method depends on the location of the imported file. If the file is located higher in the folder tree the import should be absolute, if the file is located in the same folder or nested we use relative import.

Example file structure:

```
📦project
 ┗ 📂src
   ┣ 📂screens
   ┃ ┣ 📂AuthScreen.tsx
   ┃ ┃  ┣ 📜AuthScreen.styles.tsx
   ┃ ┃  ┗ 📜AuthScreen.tsx
   ┗ 📂components
     ┗ 📂forms
       ┗ 📂SignInForm
         ┣ 📜SignInForm.styles.tsx
         ┗ 📜SignInForm.tsx
```

Example use cases:

Import of `SignInForm` in `SignInScreen`:

✅ Correct
```
import { SignInForm } from './SignInForm'
```
❌ Wrong
```
import { SignInForm } from 'screens/SignInForm'
```

Import of `TextInput` in `SignInForm`:

✅ Correct
```
import { TextInput } from 'components/TextInput'
```
❌ Wrong
```
import { TextInput } from '../components/TextInput'
```

#### Export

Do not use `export default`  in the project. Each `export` should be named to make it easier to automaticaly import types and to assist IDE in code refactoring.

### Styling

Declare styled-components in <ComponentName>.styles.tsx file, then import styles into component as:
 
```
import * as Styled from '<ComponentName>.styles'
```

Props used only for styling in styled components should be declared as transient props ($ prefix). Example:
```
const Comp = styled.div`
  color: ${props =>
    props.$draggable || 'black'};
`

render(
  <Comp $draggable="red" draggable="true">
    Drag me!
  </Comp>
)
```

## Contributing

### Commit messages
```
<type>(<scope>): <short summary> (#<task number>)
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|dev-infra|docs-infra|migrations|
  │                          ngcc|ve
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

Example: 
```
feat: add cart button handler (#6)
```

### Branch names
Branch should be created with pattern:
```
<task number>/<shorten task name, every word separated with dash>
```

Example: 
```
6/add-cart-screen
```
