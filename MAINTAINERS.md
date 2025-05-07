# Maintaining @parcl-oss/parcl-v3-idl

This document outlines the process for maintainers to cut new releases of the package.

## Release Process

This project uses [`standard-version`](https://github.com/conventional-changelog/standard-version) to automate versioning, changelog generation, and Git tagging based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

**Prerequisites:**

- Ensure you have push access to the `main` branch and the `v*` tags on the [GitHub repository](https://github.com/ParclFinance/parcl-v3-idl).
- Ensure you have publish access to the [@parcl-oss](https://www.npmjs.com/org/parcl-oss) organization on NPM.
- Ensure you are logged into NPM via the CLI (`npm login`).

**Steps to Create a New Release:**

1.  **Ensure `main` is Up-to-Date:**
    Make sure your local `main` branch has all the latest changes from the remote repository.

    ```bash
    git checkout main
    git pull origin main
    ```

2.  **Verify Changes:**
    Ensure all desired features, fixes, and documentation updates intended for the release have been merged into the `main` branch.

3.  **Check Commit History:**
    Briefly review the commit history since the last tag (`git log v0.1.2..HEAD` - replace `v0.1.2` with the actual last tag). Ensure commit messages follow the Conventional Commits standard, as this dictates the version bump.

    - `fix: ...` -> Patch release
    - `feat: ...` -> Minor release
    - `docs: ...`, `chore: ...`, `refactor: ...` etc. -> Patch release
    - Commit message containing `BREAKING CHANGE:` in the footer or `feat!: ...` -> Major release

4.  **Run the Release Script:**
    Execute the release script from the project root:

    ```bash
    pnpm run release
    ```

    This command will:

    - Run tests (`pnpm test`).
    - Analyze commits since the last tag.
    - Determine the new version number.
    - Update `package.json` and `pnpm-lock.json` (if applicable) with the new version.
    - Generate/update `CHANGELOG.md` based on commits.
    - Create a Git commit for these changes (e.g., `chore(release): 0.2.0`).
    - Create a Git tag for the new version (e.g., `v0.2.0`).

5.  **Push Commits and Tags:**
    Push the newly created commit and tag to the remote repository:

    ```bash
    git push --follow-tags origin main
    ```

6.  **Publish to NPM:**
    Publish the new version to NPM:

    ```bash
    npm publish
    ```

    Since it's a scoped package (@parcl-oss), it should publish publicly by default if permissions are set correctly.

7.  **Verify on NPM:**
    Check the package page on [npmjs.com](https://www.npmjs.com/package/@parcl-oss/parcl-v3-idl) to ensure the new version is live and the details are correct.

8.  **Create GitHub Release (Optional but Recommended):**
    Go to the [Releases page](https://github.com/ParclFinance/parcl-v3-idl/releases) on GitHub and draft a new release based on the tag created by `standard-version`. You can copy the relevant section from the `CHANGELOG.md` into the release notes.

## Handling Release Errors

- **Tests Fail:** If `pnpm test` fails during the `release` script, fix the tests before attempting to release again.
- **Incorrect Version Bump:** If `standard-version` suggests the wrong version bump (e.g., patch instead of minor), it usually means the commit messages since the last tag didn't correctly follow the Conventional Commits standard (e.g., missing a `feat:` prefix for a new feature). You might need to amend commit messages (if feasible and not pushed) or manually specify the version bump (`pnpm run release -- --release-as minor`).
- **NPM Publish Fails:** Check authentication (`npm whoami`), network connection, and NPM registry status. Ensure you have the correct permissions for the `@parcl-oss` scope.
- **Git Push Fails:** Ensure you have permissions and the remote is configured correctly.

If a release commit/tag needs to be undone locally _before pushing_: `git reset --hard HEAD~1` and `git tag -d vX.Y.Z`.
