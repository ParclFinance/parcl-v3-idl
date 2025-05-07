# Contributing to @parcl-oss/parcl-v3-idl

Thank you for your interest in contributing! We welcome contributions from everyone.

## How to Contribute

There are many ways to contribute, including:

- Reporting bugs
- Suggesting enhancements or new features
- Improving documentation
- Submitting pull requests for bug fixes or features

## Reporting Bugs

If you encounter a bug, please file an issue on the [GitHub Issues page](https://github.com/ParclFinance/parcl-v3-idl/issues). Please include:

- A clear and descriptive title.
- A detailed description of the issue, including steps to reproduce it.
- The version of the package you are using.
- Any relevant code snippets or error messages.

## Suggesting Enhancements

If you have an idea for an enhancement or a new feature, please file an issue first to discuss it. This allows maintainers to coordinate efforts and provide feedback.

## Pull Requests

We welcome pull requests! Please follow these steps:

1.  **Fork the repository** and create your branch from `main`.
2.  **Make your changes.** Ensure code follows existing style and practices.
3.  **Update Documentation:** If your changes affect the API or usage, please update the `README.md` accordingly.
4.  **Ensure Tests Pass:** Run `pnpm test` to make sure all tests still pass.
5.  **Commit Your Changes:** Please use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for your commit messages. This helps automate the release process. Examples:
    - `fix: Correct type definition for MarketAccount`
    - `feat: Add support for V4 IDL extensions`
    - `docs: Improve usage examples in README`
    - `chore: Update development dependencies`
6.  **Open a Pull Request:** Push your branch to your fork and open a pull request against the `main` branch of the original repository. Provide a clear description of your changes.

## Development Setup

1.  Clone your fork.
2.  Install dependencies: `pnpm install`
3.  Make your changes.
4.  Run tests: `pnpm test`
5.  Build the package: `pnpm run build`
