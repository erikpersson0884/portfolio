# Erik Persson Portfolio

Personal portfolio of Erik Persson, software engineering student. Scrapbook style: a dark desk, a polaroid portrait and postcards from student life.

[![Last Commit][last-commit-shield]][last-commit-url]
[![Build Status][build-shield]][build-url]
[![Test Coverage][coverage-shield]][coverage-url]
[![Repo Size][repo-size-shield]][repo-size-url]
[![Author][author-shield]][author-url]

# Index

1. [About the project](#about-the-project)
1. [Getting started](#getting-started)
1. [Editing the content](#editing-the-content)
1. [Scripts](#scripts)
1. [Testing](#testing)
1. [Deployment](#deployment)
1. [Authors](#authors)

# About the project

A single-page portfolio that presents Erik's expertise, projects, student activities and skills. It is built from the React template, so it keeps the template's structure: pages in `src/pages`, shared building blocks in `src/components`, layout in `src/layouts` and one CSS file next to each component.

This repository contains **only the frontend**. There is no backend.

## Built with

![React][react-shield]
![TypeScript][ts-shield]
![Vite][vite-shield]
![Vitest][vitest-shield]
![Docker][docker-shield]

## Features

- Hero with portrait, expertise cards, project cards and a postcard-style activity section
- All content in one typed data file (`src/data/portfolio.ts`)
- Responsive down to mobile, visible keyboard focus, reduced-motion support
- Docker image served by nginx, built and pushed by GitHub Actions

# Getting started

## Prerequisites

- Node.js 22+

## Installation

```sh
# Clone the repository
git clone https://github.com/erikpersson0884/portfolio.git

# Navigate into the project directory
cd portfolio

# Install dependencies
npm install

# Start the project
npm run dev
```

The app runs on http://localhost:3000.

# Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm test` | Run the tests |
| `npm run test:coverage` | Run the tests with a coverage report |

# Testing

Tests use Vitest and Testing Library. They cover the home page and the postcard section.

```sh
npm run test:coverage
```

# Deployment

The repository includes a `Dockerfile` (build with Node, serve with nginx).

```sh
docker build -t erik-portfolio .
docker run -p 8080:80 erik-portfolio
```

The app is then available on http://localhost:8080. The workflow in `.github/workflows/build-and-push.yml` builds and pushes the image on GitHub.

# Authors

- [Erik Persson](https://erik-persson.com)

<!-- --- ---   --- --- --->
<!-- Repo info shields  -->
<!-- --- ---   --- --- --->

<!-- Last commit shield -->
[last-commit-shield]: https://img.shields.io/github/last-commit/erikpersson0884/portfolio/main?style=for-the-badge&cacheSeconds=30
[last-commit-url]: https://github.com/erikpersson0884/portfolio/commits/main

<!-- Author shield -->
[author-shield]: https://img.shields.io/badge/Author-Erik%20Persson-blue?style=for-the-badge
[author-url]: https://erik-persson.com

<!-- Build status shield -->
[build-shield]: https://img.shields.io/github/actions/workflow/status/erikpersson0884/portfolio/build-and-push.yml?branch=main&style=for-the-badge
[build-url]: https://github.com/erikpersson0884/portfolio/actions

<!-- Repo size shield -->
[repo-size-shield]: https://img.shields.io/github/repo-size/erikpersson0884/portfolio?style=for-the-badge&cacheSeconds=60
[repo-size-url]: https://github.com/erikpersson0884/portfolio

<!-- Test coverage shield -->
[coverage-shield]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/erikpersson0884/portfolio/coverage/.github/coverage.json&style=for-the-badge&v=2
[coverage-url]: https://github.com/erikpersson0884/portfolio/actions


<!-- Tech stack shields -->
[react-shield]: https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge
[ts-shield]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge
[vite-shield]: https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge
[vitest-shield]: https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white&style=for-the-badge
[docker-shield]: https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge
