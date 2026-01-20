# Trusted QSL Archive & Reference

This repository preserves the original documentation for the Trusted QSL project, first published at https://www.rickmurphy.net/trustedqsl.org/ in 2003. The project established foundational standards for cryptographically signed electronic QSL confirmations in amateur radio, promoting open implementations of the Digital Signature Standard (DSS).

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## About Trusted QSL

The Trusted QSL Group developed specifications and tools enabling amateur radio operators to exchange cryptographically authenticated contact confirmations. The system uses X.509 Public Key Infrastructure with DSA or RSA digital signatures (minimum 1024-bit keys) to verify both the identity of the submitting station and the integrity of the QSL data.

**Core Technologies:**

- **tQSL**: Electronic QSL cards signed with public key cryptography
- **GAbbI**: Global Amateur Interchange specification for structured QSL data
- **ADIF Integration**: Amateur Data Interchange Format compatibility
- **X.509 PKI**: Certificate-based identity verification through trusted Certification Authorities

The specifications documented here influenced the development of the ARRL's Logbook of the World (LoTW), which remains the most widely deployed implementation of trusted QSL exchange.

## Repository Structure

```
tqsl-docs/
├── src/content/docs/
│   ├── faq.md                          Frequently asked questions
│   ├── index.md                        Project overview
│   ├── reference/
│   │   ├── about-this-archive.md       Preservation notes
│   │   ├── license.md                  Original license text
│   │   └── missing-resources.md        Known gaps in archive
│   └── specifications/
│       ├── gabbi.md                    GAbbI data format
│       └── lotw.md                     ARRL LoTW reference
├── contrib/                            Original HTML archive (2003)
├── public/images/                      Static assets
└── _archive/                           Conversion artifacts
```

## Getting Started

This site is built with Astro and Starlight. You can work with the project using either native Node.js tools or Docker for dependency isolation.

### Quick Start: Docker

If you have Docker installed, you can start working immediately without installing Node.js, npm, or any other dependencies on your host machine.

```bash
make docker-dev
```

The development server will find an available port (starting from 4321) and display the URL. Hot reloading works out of the box—edit any source file and see changes instantly in your browser.

**Docker Commands:**

```bash
make docker-dev      # Start development server
make docker-serve    # Preview production build
make docker-ci       # Run linting, type checking, and build
make docker-build    # Build container images
make docker-clean    # Remove containers and volumes
make docker-logs     # Follow dev server logs
make docker-stop     # Stop all services
```

Run `make` or `make help` to see the complete list of targets.

### Quick Start: Native Development

If you prefer working directly with Node.js tools, install dependencies and start the development server:

```bash
npm install
npm run dev
```

**Development Commands:**

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
npm run build        # Build production site
npm run preview      # Preview production build
npm run lint         # Check code formatting
npm run lint:fix     # Auto-fix formatting
npm run type-check   # Run Astro and TypeScript checks
npm run ci           # Run full CI pipeline
```

### Quality Automation

The project uses git hooks to maintain code quality:

- **Pre-commit**: Runs Prettier formatting and Astro checks on staged files
- **Pre-push**: Runs the full CI pipeline before pushing code changes

Hooks automatically degrade gracefully if Node.js dependencies aren't installed (e.g., Docker-only workflow).

## Docker Workflow Details

The Docker setup uses a single-stage container optimized for development, providing Node.js 22 and managing all dependencies internally to keep your host filesystem clean. The container automatically detects free ports (starting from 4321), watches `package.json` for changes to reinstall dependencies, and provides hot module replacement for instant browser updates.

Source code mounts from the host while `node_modules`, `dist`, and build artifacts remain isolated in Docker volumes. This architecture preserves IDE integration for the `.astro` directory while avoiding host filesystem pollution.

**Requirements:** [Docker Desktop](https://www.docker.com/products/docker-desktop/) or Docker Engine with Docker Compose, and `make` (standard on macOS and Linux). macOS users may prefer [Colima](https://github.com/abiosoft/colima) as a lightweight alternative to Docker Desktop. [Podman](https://podman.io/) is also compatible with this setup.

## GitHub Pages Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on push to the main branch. The workflow file at `.github/workflows/astro.yml` checks out the repository, sets up Node.js 22, installs dependencies, runs the CI pipeline, builds the site with Astro, and deploys the `dist/` directory to GitHub Pages.

**Configuration Requirements:**

GitHub Pages serves project sites from a subdirectory matching the repository name. The `base` path in `astro.config.mjs` must match this:

| Repository                        | Deployed URL                      | `site`                         | `base`        |
| --------------------------------- | --------------------------------- | ------------------------------ | ------------- |
| `radiolabme/radiolabme.github.io` | `radiolabme.github.io/`           | `https://radiolabme.github.io` | `/` (default) |
| `radiolabme/tqsl-docs`            | `radiolabme.github.io/tqsl-docs/` | `https://radiolabme.github.io` | `/tqsl-docs`  |

For this repository:

```javascript
export default defineConfig({
  site: 'https://radiolabme.github.io',
  base: '/tqsl-docs',
  // ... rest of config
});
```

If `base` is missing or incorrect, the site will build successfully but CSS, JavaScript, and navigation links will 404 in production because they reference paths from the root domain instead of the subdirectory.

Enable GitHub Pages in repository settings: **Settings → Pages → Source** set to "GitHub Actions". The repository must be public or have GitHub Pages enabled for private repositories.

**Pre-Deployment Verification:**

Test the production build before pushing:

```bash
npm run ci && npm run preview      # Native tools
make docker-ci && make docker-serve # Docker
```

The deployed site is available at https://radiolabme.github.io/tqsl-docs/

**Common Issues:** 404 errors on navigation indicate incorrect `base` configuration. Missing styles suggest a mismatch between `site` URL and the actual GitHub Pages URL. Build failures typically require committing `package-lock.json` to the repository.

## Technology Stack

**Build Tools:**

- [Astro](https://astro.build) v5.16+ — Static site generator
- [Starlight](https://starlight.astro.build/) v0.37+ — Documentation framework
- Node.js 22 — Runtime environment

**Quality Tools:**

- [Prettier](https://prettier.io/) — Code formatting
- [Husky](https://typicode.github.io/husky/) — Git hooks
- [lint-staged](https://github.com/lint-staged/lint-staged) — Pre-commit linting

**Original Trusted QSL Stack:**

- OpenSSL — Cryptographic library
- X.509 PKI — Certificate infrastructure
- DSA/RSA algorithms — Digital signatures (≥1024-bit)
- ADIF — Amateur Data Interchange Format
- GAbbI — Global Amateur Interchange specification

## Contributing

This is a historical archive and reference. Active development of Trusted QSL software continues at:

- [TrustedQSL on SourceForge](https://sourceforge.net/projects/trustedqsl/)
- [ARRL Logbook of the World](https://www.arrl.org/lotw/)

Contributions to improve this documentation archive are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## External Resources

- [TrustedQSL on SourceForge](https://sourceforge.net/projects/trustedqsl/) — Source code and releases
- [ARRL Logbook of the World](https://www.arrl.org/lotw/) — Production implementation
- [ADIF Specification](http://www.adif.org) — Amateur Data Interchange Format
- [OpenSSL Project](https://www.openssl.org/) — Cryptographic library

## License

This documentation repository is licensed under the MIT License. The original Trusted QSL software and specifications are licensed under the Trusted QSL Open Source License (BSD-style).

See [LICENSE.md](LICENSE.md) for complete licensing details, including attribution requirements for ARRL, Darryl Wagoner WA1GON, and Rick Murphy.

---

**Archive Date:** January 19, 2026  
**Original Source:** https://www.rickmurphy.net/trustedqsl.org/ (last updated June 14, 2003)
