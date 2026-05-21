# CodeChronicle

![Generate AI Article](https://img.shields.io/github/actions/workflow/status/antoineChv-ecv/codechronicle/generate-article.yml?label=AI%20Generation&style=flat-square)
![Generate Site](https://img.shields.io/github/actions/workflow/status/antoineChv-ecv/codechronicle/generate-site.yml?label=Site%20Generation&style=flat-square)
![Deploy FTP](https://img.shields.io/github/actions/workflow/status/antoineChv-ecv/codechronicle/deploy-ftp.yml?label=FTP%20Deploy&style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/antoineChv-ecv/codechronicle?style=flat-square)
![License](https://img.shields.io/github/license/antoineChv-ecv/codechronicle?style=flat-square)

> Automated technical blog powered by GitHub Actions, OpenAI, and InfinityFree.

🔗 **Live blog:** [blogchloeantoine.infinityfreeapp.com](https://blogchloeantoine.infinityfreeapp.com)

---

## What is CodeChronicle?

CodeChronicle is a full DevOps pipeline that automates the creation, management, and deployment of a technical blog. Articles are AI-generated from Markdown filenames, transformed into a static HTML site, deployed to InfinityFree via FTP, and the team is notified in real time through Discord — all orchestrated with GitHub Actions.

---

## Pipeline Overview

```
Empty .md file → PR opened → AI generates article → PR commented → Merge → Site built → FTP deployed → Discord notified
```

---

## Project Structure

```
codechronicle/
├── .github/
│   └── workflows/
│       ├── generate-article.yml     # AI generation triggered on PR open
│       ├── comment-pr.yml           # Automatic comment on the PR
│       ├── generate-site.yml        # Static site generation on merge
│       ├── discord-notify.yml       # Discord notification on merge
│       └── deploy-ftp.yml           # FTP deployment to InfinityFree
├── blog/                            # Markdown files (empty or AI-generated)
├── public/                          # Generated static HTML site
├── scripts/
│   └── generate-site.js             # Transforms .md files into HTML
├── package.json
└── README.md
```

---

## How It Works

### 1. Create a new article

Add an empty Markdown file to `blog/` following this naming convention:

```
blog/YYYY-MM-DD-article-slug.md
```

The filename becomes the AI prompt. For example:
`blog/2025-05-01-introduction-to-docker.md` → prompt: `"introduction to docker"`

### 2. Open a Pull Request

Opening a PR toward `main` triggers two workflows automatically:

- **`generate-article.yml`** — calls the OpenAI API and fills the `.md` file with a complete article (title, summary, tags, content in YAML frontmatter)
- **`comment-pr.yml`** — posts a comment in the PR with the generated title and summary

### 3. Merge

Merging into `main` triggers three workflows:

- **`generate-site.yml`** — runs `node scripts/generate-site.js` to convert all `.md` files into HTML pages and generate `public/index.html`
- **`deploy-ftp.yml`** — uploads the `public/` folder to InfinityFree via FTP
- **`discord-notify.yml`** — sends a Discord notification with the article title, summary, and link

---

## GitHub Secrets Required

| Secret | Description |
|--------|-------------|
| `OPENAI_API_KEY` | OpenAI API key for article generation |
| `FTP_HOST` | InfinityFree FTP host |
| `FTP_USERNAME` | InfinityFree FTP username |
| `FTP_PASSWORD` | InfinityFree FTP password |
| `DISCORD_WEBHOOK_URL` | Discord webhook URL for notifications |

---

## Tech Stack

- **GitHub Actions** — CI/CD orchestration
- **Node.js** — scripting (vanilla JS, no TypeScript)
- **OpenAI API** — AI article generation
- **Markdown + YAML frontmatter** — content format
- **HTML** — static site output
- **InfinityFree FTP** — hosting
- **Discord Webhook** — team notifications
- **Shields.io** — README badges
