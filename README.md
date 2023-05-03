<h1 align="center">Pg-mate</h1>
<p align="center"><a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&duration=2000&pause=2000&center=true&width=540&height=80&lines=First+class+dependency+injection+for+PostgreSQL." alt="Typing SVG" /></a></p>

### Injekt is a simple dependency injection tool for typescript with the following features:

- First class dependency injection without container
- Fully written in TypeScript
- Clean code compatible

---

Table of Contents:

- [Installation](#installation)
- [Usage](#usage)

---

## Installation

To get started, install Pg-mate using npm or yarn:

```sh
npm install injekt
# or
yarn add injekt
```

## Usage

```typescript
import { injeckt } from 'injekt';

const insertUserInDB = (name: string) => {
  return db.insert('user', { name });
};

const [createUser, createUserFactory] = injeckt(
  { insertUserInDB },
  (deps) => (name: string) => {
    return deps.insertUserInDB(name);
  }
);

// usage
await createUser('John');

// test
const fakeInsertUserInDB = () => {};
const createUser = createUserFactory({ insertUserInDB: fakeInsertUserInDB });
const result = createUser('John');

// assert fakeInsertUserInDB called once
// assert result is {name: 'John'}
```

---

That's it! You can now use injekt to create unit testable functions.
