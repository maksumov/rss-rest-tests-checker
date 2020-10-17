# rss-rest-tests-checker

A simple tool for checking that the test files remained unchanged for the [RS School REST service task](https://github.com/rolling-scopes-school/nodejs-course-template) at the Rolling Scopes School Node.js development course.

## Installation

1. `npm config set @maksumov:registry https://npm.pkg.github.com/maksumov`
2. `npm install -D @maksumov/rss-rest-tests-checker`

## Usage

For starting check just run

```bash
npm explore @maksumov/rss-rest-tests-checker -- npm start
```

You can also use an optional argument to specify the location of the test folder. Example for the case when the folder with tests is located in the current folder:

```bash
npm explore @maksumov/rss-rest-tests-checker -- npm start .
```
