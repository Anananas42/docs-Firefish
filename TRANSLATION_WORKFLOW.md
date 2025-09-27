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
│   │   ├── current.json               # Metadata translations
│   │   └── current/                   # 📄 SOURCE MARKDOWN FILES
│   │       ├── how-it-works.md
│   │       ├── firefish-protocol.md
│   │       ├── faq/
│   │       │   ├── general.md
│   │       │   └── ...
│   │       └── ... (all docs structure)
│   └── docusaurus-plugin-content-blog/
│       └── options.json
├── es/                                 # Spanish translations
│   └── docusaurus-plugin-content-docs/
│       └── current/                   # 📄 TRANSLATED MARKDOWN FILES
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

## Automated GitHub Actions Workflow

The repository now includes automated Crowdin integration:

**Crowdin Sync Workflow** (`.github/workflows/crowdin.yml`):
- **Triggers:** Push to main, manual trigger, daily at 6 AM UTC
- **Actions:**
  1. Updates translation templates
  2. Syncs new docs to translation source
  3. Uploads to Crowdin
  4. Downloads latest translations
  5. Commits translation updates if found
  6. Triggers deployment

**Deploy Workflow** (`.github/workflows/deploy.yml`):
- **Updated:** Now builds all locales instead of English-only
- **Triggers:** Push to main + after Crowdin workflow completes
- **Result:** Live site includes all available translations

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

## How Content Translation Works

**Source Content:**
- English documentation lives in `docs/` folder (original location)
- Source files for Crowdin are in `i18n/en/docusaurus-plugin-content-docs/current/`
- These are synchronized copies of your main documentation

**Translation Process:**
1. **Upload to Crowdin:** Markdown files go to Crowdin for translation
2. **Translators work:** Translators see content in Crowdin's interface
3. **Download translations:** Completed translations come back as markdown files
4. **Build site:** Docusaurus automatically uses translated content

**What Gets Translated:**
- ✅ All markdown content (headings, paragraphs, lists, etc.)
- ✅ UI elements (buttons, navigation, etc.)
- ✅ Media insights overview page (describes the section)
- ❌ Language-specific media insight pages (already in native languages)
- ❌ Code blocks, file paths, and technical identifiers (preserved automatically)

## Notes

- All documentation content starts in English (`docs/` folder)
- Source files for translation are mirrored in `i18n/en/docusaurus-plugin-content-docs/current/`
- Theme and UI translations are managed through JSON files
- **Full markdown content translation is now configured and ready**
- Crowdin handles the translation management interface
- Translators work in Crowdin's web interface with markdown-aware editor
- Completed translations sync back to this repository as translated markdown files