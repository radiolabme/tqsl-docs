# Contributing to TQSL Documentation Archive

This project preserves historical documentation for the Trusted QSL project. We welcome contributions that improve the archive's quality, accuracy, and accessibility.

## Ways to Contribute

### Documentation Improvements

- Fix typos, grammatical errors, or formatting issues
- Improve clarity or technical accuracy
- Add missing context or explanatory notes
- Update broken or outdated external links

### Technical Enhancements

- Improve build tooling or development workflow
- Fix bugs in the site generation
- Enhance accessibility or performance
- Add useful metadata or search capabilities

### Historical Research

- Locate and add missing resources referenced in the original documentation
- Provide additional context about the Trusted QSL project's history
- Document the relationship between Trusted QSL specifications and their implementations

## Development Workflow

### Prerequisites

Choose one of the following:

**Option 1: Docker** (no Node.js installation required)

- Docker Desktop or Docker Engine with Docker Compose
- `make` (standard on macOS/Linux)

**Option 2: Native Development**

- Node.js 22+
- npm 10+

### Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally:

   ```bash
   git clone https://github.com/YOUR-USERNAME/tqsl-docs.git
   cd tqsl-docs
   ```

3. Start the development server:

   **With Docker:**

   ```bash
   make docker-dev
   ```

   **With Node.js:**

   ```bash
   npm install
   npm run dev
   ```

4. Make your changes and test them locally
5. Commit your changes with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Quality

The project uses automated quality checks:

- **Prettier**: Code formatting (runs on commit)
- **Astro check**: Type checking and validation (runs on commit and push)
- **CI pipeline**: Full linting, type checking, and build (runs on push)

If you're using the native development workflow, git hooks will run these checks automatically. For Docker-only workflows, run the checks manually before pushing:

```bash
make docker-ci
```

### Commit Messages

Write clear, concise commit messages that describe what changed and why:

```
Fix broken link to ADIF specification

The link to adif.org was redirecting to a parking page.
Updated to point to the current specification URL.
```

For small typo fixes, a simple message is fine:

```
Fix typo in GAbbI specification
```

## Content Guidelines

### Preserving Historical Accuracy

This is an archive of historical documentation. When making changes:

- Preserve the original intent and technical content
- Add editorial notes or clarifications in clearly marked sections
- Use the `reference/about-this-archive.md` document to explain significant changes or gaps

### Markdown Style

- Use Starlight-compatible Markdown (see [Starlight Docs](https://starlight.astro.build/))
- Add meaningful link text (avoid "click here")
- Use proper heading hierarchy (h2 → h3 → h4)
- Format code blocks with appropriate language tags

### Technical Writing

- Write for a technical audience familiar with amateur radio
- Define acronyms on first use
- Link to external resources for background information
- Use present tense for descriptions and instructions

## Pull Request Process

1. **Check for existing issues**: Before starting work, see if there's already a related issue or pull request
2. **Create focused PRs**: Keep pull requests small and focused on a single change or related set of changes
3. **Test thoroughly**: Verify your changes work in both development and production builds
4. **Update documentation**: If you change how something works, update relevant documentation
5. **Describe your changes**: Provide a clear description of what changed and why in the PR description

### PR Review

- All PRs require passing CI checks before merge
- Maintainers will review your PR and may request changes
- Be responsive to feedback and questions
- Once approved, a maintainer will merge your PR

## Project Structure

Understanding the repository layout:

```
tqsl-docs/
├── src/
│   ├── content/
│   │   └── docs/           # Documentation content (edit here)
│   ├── content.config.ts   # Content schema
│   └── assets/             # Images, diagrams, etc.
├── public/
│   └── images/             # Static images
├── contrib/                # Original HTML archive (reference only)
├── .docker/                # Docker configuration
├── .github/workflows/      # CI/CD automation
└── astro.config.mjs        # Astro configuration
```

Most contributions will involve editing files in `src/content/docs/`.

## Questions or Problems?

- **Technical questions**: Open an issue with the "question" label
- **Bug reports**: Open an issue with detailed reproduction steps
- **Feature requests**: Open an issue describing the proposed enhancement

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License, consistent with the project's existing license.

## Active Development Projects

This is a documentation archive. For contributions to active Trusted QSL software development, see:

- [TrustedQSL on SourceForge](https://sourceforge.net/projects/trustedqsl/)
- [ARRL Logbook of the World](https://www.arrl.org/lotw/)

---

Thank you for contributing to the preservation of amateur radio's technical heritage!
