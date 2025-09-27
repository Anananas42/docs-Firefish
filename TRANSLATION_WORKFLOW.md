# Translation Workflow with Crowdin

This document explains how to use the Crowdin integration for managing translations in this Docusaurus repository.

## Prerequisites

1. Access to the Firefish Crowdin project
2. Crowdin project credentials:
   - `CROWDIN_PROJECT_ID` environment variable
   - `CROWDIN_TOKEN` environment variable

## Setup for Developers with Crowdin Access

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Environment Variables
Create a `.env.local` file in the root directory:
```
CROWDIN_PROJECT_ID=your_project_id
CROWDIN_TOKEN=your_api_token
```

### 3. Verify Configuration
```bash
npm run crowdin:status
```

## Translation Workflow

### 1. Adding New Content
When you add new content that needs translation:

```bash
# Generate updated translation templates
npm run write-translations

# Upload new content to Crowdin
npm run crowdin:upload
```

### 2. Downloading Translations
To get the latest translations from Crowdin:

```bash
npm run crowdin:download
```

### 3. Full Sync
To update templates and sync all translations:

```bash
npm run crowdin:sync
```

## File Structure

The translation files are organized as follows:

```
i18n/
├── en/                                 # Source language (English)
│   ├── code.json                      # Theme translations
│   ├── docusaurus-theme-classic/
│   │   ├── navbar.json
│   │   └── footer.json
│   ├── docusaurus-plugin-content-docs/
│   │   └── current.json
│   └── docusaurus-plugin-content-blog/
│       └── options.json
├── es/                                 # Spanish translations
├── de/                                 # German translations
├── it/                                 # Italian translations
├── cs/                                 # Czech translations
└── zh-Hant/                           # Traditional Chinese translations
```

## Crowdin Configuration

The `crowdin.yml` file defines:
- Project credentials (via environment variables)
- File mappings between source and translation files
- Translation file organization

## Git Workflow

- Source translations (`i18n/en/`) are tracked in git
- Translation files for other locales can be:
  - Tracked in git (current setup)
  - Excluded from git (uncomment lines in `.gitignore`)

## Available Scripts

- `npm run crowdin:upload` - Upload source files to Crowdin
- `npm run crowdin:download` - Download translations from Crowdin
- `npm run crowdin:status` - Check translation status
- `npm run crowdin:sync` - Full sync (write-translations + upload + download)

## Testing Translations

Build the site to test all locales:
```bash
npm run build
```

Serve locally to test specific locales:
```bash
npm run serve
```

Visit:
- English: http://localhost:3000/docs-Firefish/
- Spanish: http://localhost:3000/docs-Firefish/es/
- German: http://localhost:3000/docs-Firefish/de/
- Italian: http://localhost:3000/docs-Firefish/it/
- Czech: http://localhost:3000/docs-Firefish/cs/
- Chinese: http://localhost:3000/docs-Firefish/zh-hant/

## Notes

- All documentation content starts in English (`docs/` folder)
- Theme and UI translations are managed through JSON files
- Crowdin handles the translation management interface
- Translators work in Crowdin's web interface
- Completed translations sync back to this repository