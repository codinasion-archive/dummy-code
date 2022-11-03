This repository contains the source code for the [dummy-code](https://www.npmjs.com/package/dummy-code) package. It is a collection of useful TypeScript functions, which can be used in any project.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [New contributor guide](#new-contributor-guide)
  - [Add a new function](#add-a-new-function)
  - [Improve an existing function](#improve-an-existing-function)
  - [Improve the documentation](#improve-the-documentation)
  - [Improve the code style](#improve-the-code-style)
  - [Report a bug](#report-a-bug)
  - [Request a new function](#request-a-new-function)
  - [Suggest an improvement](#suggest-an-improvement)
  - [Ask a question](#ask-a-question)
- [License](#license)

## New contributor guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub][2]
- [Set up Git][3]
- [GitHub flow][4]
- [Collaborating with pull requests][5]

### Add a new function

If you want to add a new function, you can do so by following these steps:

1. [Fork this repository][1]
2. Create a new branch for your function
3. Create a new folder in the `src` folder, with the name of your function (for e.g. `src/add-two-numbers`)
4. Add your function to the above created folder (for e.g. `src/add-two-numbers/index.ts`). Please make sure that you use function name in the PascalCase format (for e.g. `AddTwoNumbers`).
5. Add a test for your function to the `__test__` folder (for e.g. `src/add-two-numbers/__test__/test.ts`)
6. Export your function in the `src/index.ts` file
7. Run `yarn test` to make sure your function works as expected
8. Run `yarn build` to make sure your function is transpiled correctly
9. Run `yarn lint` to make sure your function follows the code style
10. Create a pull request. Please make sure that you `allow edits from maintainers`, for easier merging.
11. Wait for your pull request to be reviewed and merged
12. :partying_face: Celebrate, as your function is now available to awesome Open Source developers!

### Improve an existing function

If you want to improve an existing function, you can do so by following these steps:

1. Fork this repository
2. Create a new branch
3. Make your changes to the function
4. Modify the test for your function to make sure it still works as expected
5. Run `yarn test` to make sure your function works as expected
6. Run `yarn build` to make sure your function is transpiled correctly
7. Run `yarn lint` to make sure your function follows the code style
8. Create a pull request
9. Wait for your pull request to be reviewed and merged
10. :partying_face: Celebrate, as you have improved an Open Source project and made it better!

### Improve the documentation

If you want to improve the documentation, you can do so by following these steps:

1. Fork this repository
2. Create a new branch
3. Make your changes to the documentation
4. Create a pull request
5. Wait for your pull request to be reviewed and merged
6. :partying_face: Celebrate, as you have made the documentation better for everyone!

### Improve the code style

If you want to improve the code style, you can do so by following these steps:

1. Fork this repository
2. Create a new branch
3. Make your changes to the code style
4. Run `yarn lint` to make sure your changes follow the code style
5. Create a pull request
6. Wait for your pull request to be reviewed and merged
7. :partying_face: Celebrate, as you have made the code style better for everyone!

### Report a bug

If you want to report a bug, you can do so by creating a new issue using [the bug report template][6].

### Request a new function

If you want to request a new function, you can do so by creating a new issue using [the feature request template][7].

### Suggest an improvement

If you want to suggest an improvement, you can do so by creating a new issue using [the feature request template][7].

### Ask a question

If you want to ask a question, you can do so by creating a [new Discussion][8]. Please make sure that your question hasn't already been answered in the [Discussions][8].

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

[1]: https://docs.github.com/en/get-started/quickstart/fork-a-repo 'How to fork a GitHub repository'
[2]: https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github 'Finding ways to contribute to open source on GitHub'
[3]: https://docs.github.com/en/get-started/quickstart/set-up-git 'Set up Git'
[4]: https://docs.github.com/en/get-started/quickstart/github-flow 'GitHub flow'
[5]: https://docs.github.com/en/get-started/quickstart/collaborating-with-issues-and-pull-requests 'Collaborating with pull requests'
[6]: https://github.com/codinasion/dummy-code/issues/new?assignees=&labels=bug&template=bug.yml 'Bug report template'
[7]: https://github.com/codinasion/dummy-code/issues/new?assignees=&labels=bug&template=feature_request.yml 'Feature request template'
[8]: https://github.com/codinasion/dummy-code/discussions 'Discussions'
