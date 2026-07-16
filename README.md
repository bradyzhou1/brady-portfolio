# Brady Zhou Portfolio

A personal portfolio website designed and developed to present my research, software projects, engineering work, music, and leadership experiences.

The site combines a scrolling homepage with dedicated project pages, allowing visitors to quickly understand my background while also exploring selected work in greater detail.

## Live Website

[Visit the portfolio website](https://www.brady-zhou.com/)

## Overview

This portfolio was built to communicate not only what I have accomplished, but also the questions and experiences that motivated my work.

The website currently highlights:

- Autism brain-connectivity research presented at Regeneron ISEF
- ParentLensAI, a family-centered information platform
- Web development projects
- Aerospace and lunar-rover engineering work
- Violin and leadership experiences

## Main Pages

### Homepage

The scrolling homepage includes:

- Introduction and personal background
- Featured ISEF research
- ParentLensAI overview
- Other selected projects
- Music
- Leadership
- Contact and profile links

### ISEF Research

A detailed presentation of my project:

**Machine Learning Approaches to Brain Connectivity in Autism**

The page includes:

- Personal motivation
- Research question
- Analysis pipeline
- Multisite validation
- Major findings
- Limitations
- Awards and recognition
- Links to the official ISEF page and GitHub repository

### ParentLensAI

A detailed overview of a family-centered platform designed to help organize and connect educational, medical, therapy, and daily-life information.

The project incorporates concepts including:

- Large language models
- Retrieval-augmented generation
- Vector search
- Document organization
- Dashboards and long-term tracking

### Project Collection

A visual collection of selected research, software, and engineering projects.

Current projects include:

1. Brain Connectivity in Autism
2. ParentLensAI
3. Portfolio Website
4. Lunar Rover Engineering

Additional projects will be added over time.

## Technology Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS
- Next.js Image Optimization
- Vercel deployment
- Git and GitHub

## Design Approach

The website was designed around several goals:

- Present technical work in language accessible to a general audience
- Maintain a consistent visual identity across the homepage and project pages
- Balance personal storytelling with technical detail
- Create a responsive experience for desktop and mobile users
- Make individual projects easy to explore without overwhelming the homepage

The visual system uses alternating light and dark sections, navy backgrounds, turquoise accents, large typography, and project-focused layouts.

## Project Structure

```text
brady-portfolio/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── research/
│   │   └── page.tsx
│   ├── parentlensai/
│   │   └── page.tsx
│   └── projects/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx
│   └── TypingIdentity.tsx
├── public/
│   ├── documents/
│   └── images/
│       ├── projects/
│       └── research/
├── package.json
├── tsconfig.json
└── README.md
