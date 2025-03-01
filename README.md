# Firefish Documentation

This repository contains the documentation for [Firefish](https://firefish.io), a Bitcoin-backed lending platform. The documentation is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Repository Structure

```
├── docs/               # Documentation content
│   ├── intro.md        # Introduction page
│   ├── guide/          # User guides
│   ├── faq/            # Frequently asked questions
│   ├── protocol/       # Technical documentation
│   ├── legal/          # Legal information
│   └── media/          # Media resources
├── i18n/               # Internationalization files
│   ├── es/             # Spanish translations
│   ├── de/             # German translations
│   ├── it/             # Italian translations
│   ├── cs/             # Czech translations
│   └── zh-Hant/        # Traditional Chinese translations
├── src/                # Source files
│   ├── components/     # React components
│   ├── css/            # CSS files
│   └── pages/          # Custom pages
├── static/             # Static files
│   └── img/            # Images
├── docusaurus.config.ts    # Docusaurus configuration
├── sidebars.ts         # Sidebar configuration
└── package.json        # NPM dependencies
```

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above
- [Yarn](https://yarnpkg.com/getting-started/install) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/firefish/documentation.git
cd documentation

# Install dependencies
yarn
```

### Local Development Server

```bash
# Start the development server
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
# Build the static site
yarn build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

### Deployment

```bash
# Deploy to GitHub Pages
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Content Structure

### Adding New Documentation

To add new documentation:

1. Create a new Markdown file in the appropriate directory under `docs/`
2. Add frontmatter at the top of the file:

```markdown
---
sidebar_position: 1
title: My New Document
description: Description of my document
---

# Document Content
```

3. Update `sidebars.ts` if necessary to include your new document

### Translations

To add translations for a document:

1. Copy the original document to the corresponding language directory under `i18n/`
2. Translate the content, keeping the same structure and frontmatter

## Contributing

We welcome contributions to the Firefish documentation! Please follow these steps:

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes
4. Test your changes locally
5. Submit a pull request

## License

This documentation is licensed under MIT License. See the LICENSE file for details.



# Notion to Docusaurus Migration Steps

This document outlines the steps needed to complete the migration from Notion to Docusaurus.

## Completed Tasks

✅ Created basic Docusaurus project structure
✅ Updated configuration files
✅ Created sidebar structure
✅ Converted English FAQ content to Docusaurus format
✅ Created guide pages
✅ Started internationalization with Spanish translation
✅ Updated homepage and styling

## Remaining Tasks

### Content Migration

1. **Convert remaining Notion documents**
   - Process all remaining files in `notion-docs-export` directory
   - Organize content into appropriate sections in `docs/`
   - Ensure proper formatting and links

2. **Media Files**
   - Extract images from Notion exports
   - Place images in the `static/img/` directory
   - Update image references in markdown files

3. **Complete Translations**
   - Convert all language versions from Notion exports
   - Organize translated content in their respective `i18n/` subdirectories
   - Test translations using the language switcher

### Development and Testing

1. **Local Testing**
   - Run `yarn start` to view the site locally
   - Test navigation, links, and responsive design
   - Test language switching functionality

2. **Build and Deployment**
   - Set up a CI/CD pipeline for automatic deployment
   - Configure hosting (GitHub Pages, Netlify, Vercel, etc.)
   - Test the production build with `yarn build && yarn serve`

### Additional Enhancements

1. **Search Functionality**
   - Implement Algolia DocSearch or local search
   - Configure search indexes

2. **SEO Optimization**
   - Add proper meta tags
   - Create sitemaps
   - Set up canonical URLs

3. **Analytics**
   - Set up analytics tracking
   - Configure privacy-compliant cookie consent

4. **Custom Domain**
   - Configure custom domain (docs.firefish.io)
   - Set up SSL certificates

## Migration Process for Remaining Notion Files

For each Notion export file:

1. Identify the content type and target location in the Docusaurus structure
2. Convert the Markdown, fixing any Notion-specific syntax
3. Add proper frontmatter with title, description, and sidebar position
4. Ensure all internal links are updated to use Docusaurus-style paths
5. Test the rendered content in the development server

## Command Reference

```bash
# Start development server
yarn start

# Build static site
yarn build

# Serve the built static site locally
yarn serve

# Deploy to GitHub Pages
GIT_USER=<Your GitHub username> yarn deploy
```

## Support

If you encounter any issues during the migration process, please contact the development team or refer to the [Docusaurus documentation](https://docusaurus.io/docs).