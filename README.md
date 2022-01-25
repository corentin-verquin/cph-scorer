# CPH Scorer

![](https://github.com/corentin-verquin/cph-scorer/actions/workflows/continuousIntegration.yml/badge.svg)[![codecov](https://codecov.io/gh/corentin-verquin/cph-scorer/branch/master/graph/badge.svg?token=TT4TPQE2Y9)](https://codecov.io/gh/corentin-verquin/cph-scorer)
![](https://img.shields.io/maintenance/yes/2022)
![](https://img.shields.io/github/commit-activity/m/corentin-verquin/cph-scorer)
![license MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Technology
![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![](https://img.shields.io/badge/YARN-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/NESTJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![](https://img.shields.io/badge/ALPINE.JS-8BC0D0?style=for-the-badge&logo=alpine.js&logoColor=black)
![](https://img.shields.io/badge/BOOTSTRAP-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![](https://img.shields.io/badge/JEST-C21325?style=for-the-badge&logo=jest&logoColor=white)
![](https://img.shields.io/badge/SEMANTIC%20RELEASE-494949?style=for-the-badge&logo=semantic-release&logoColor=white)

## Install
```bash
lerna bootstrap
```

## Usage
```bash
# Launch postgresql container
make
# or
make up-dev-env

# Stop postgresql container
make down-dev-env

# Enter in postgresql container
make connect-db

# Lint packages
make lint

# Compile packages
make compile

# End to end test (need browser target chrome or firefox)
make e2e-test
# example make e2e-test BROWSER=chrome

# Rebuild custom psql image
rebuild-image
```

## Author
**Corentin Verquin**
- Github [@corentin-verquin](https://github.com/corentin-verquin)

## License
Copyright © `2021` `Corentin Verquin`.
This project is [MIT](https://opensource.org/licenses/MIT) licensed

## Hosting
![](https://img.shields.io/badge/HEORKU-430098?style=for-the-badge&logo=heroku&logoColor=white)
![](https://img.shields.io/badge/NETLIFY-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)