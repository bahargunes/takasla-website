# Takasla Landing Page – Agent Specification

## Overview

You are tasked with building a **single-page landing website** for a project called **Takasla**.

Takasla is a platform that enables users to exchange items with each other instead of buying and selling. The purpose of this website is to clearly present the idea, usage, team, technology, and demo of the project.

The page should be **modern, clean, and responsive**, with smooth scrolling between sections.

---

## General Requirements

* Use **HTML, CSS, and minimal JavaScript**
* Prefer **Tailwind CSS** for styling (optional but recommended)
* The page must be **fully responsive** (desktop + mobile)
* Use **smooth scrolling navigation**
* Keep the design **minimal and professional**
* No backend is required (static page only)

---

## Layout Structure

The page should consist of:

1. **Navbar (fixed at top)**
2. **6 Main Sections**
3. Smooth scrolling between sections

---

## Navbar

* Fixed at the top of the page
* Contains navigation buttons that scroll to sections
* Items:

  * Problem
  * How It Works
  * Features
  * Demo
  * Developers
  * Tech Stack

### Behavior

* Clicking a navbar item smoothly scrolls to the related section
* Highlight active section (optional but preferred)
* Mobile-friendly (hamburger menu is a plus but optional)

---

## Section 1: Problem (What problem does Takasla solve?)

### Goal

Explain the problem Takasla is solving.

### Content (placeholder text is fine)

* A title (e.g., "The Problem")
* A short paragraph explaining:

  * Overconsumption
  * Unused items
  * Inefficiency of traditional buying/selling

### Design

* Clean layout
* Text-focused
* Optional illustration or icon

---

## Section 2: How Takasla Works

### Goal

Explain how users interact with the platform.

### Content

* Title (e.g., "How It Works")
* 3–4 step explanation:

  * Create a listing
  * Browse items
  * Match and exchange
  * Complete the trade

### Design

* Step-based layout (cards or horizontal flow)
* Icons or simple visuals preferred

---

## Section 3: Features

### Goal

Provide a section where platform features will be listed in the future.

### Content

* Title (e.g., "Features")
* Placeholder layout for features (cards or grid)

### Notes

* This section can remain empty or contain placeholder cards
* Structure should allow easy addition of features later

### Design

* Grid or card-based layout
* Keep spacing and alignment consistent with other sections

---

## Section 4: Demo

### Goal

Show a demo video of the platform.

### Content

* Title (e.g., "Demo")
* Embedded YouTube video

### Requirements

* Use a responsive YouTube embed (iframe)
* Ensure the video scales properly on mobile and desktop

### Design

* Centered video player
* Optional short description below or above the video

---

## Section 5: Developers

### Goal

Show the team behind the project.

### Content

* Title (e.g., "Meet the Team")
* 5 developer cards

Each card should include:

* Placeholder image
* Name (placeholder)
* Role (placeholder)
* Optional: GitHub / LinkedIn icons

### Notes

* Keep content editable (easy to replace later)
* Cards should be responsive

---

## Section 6: Tech Stack

### Goal

Show technologies used in the project.

### Content

* Title (e.g., "Tech Stack")
* List or grid of technologies

Example categories:

* Frontend
* Backend
* Database
* Tools

### Design

* Use badges, tags, or cards
* Keep it visually structured

---

## UX & Animations

* Smooth scrolling between sections
* Subtle hover effects on buttons and cards
* Optional:

  * Fade-in animations on scroll
  * Section transitions

---

## Styling Guidelines

* Use a **modern color palette**
* Ensure **good contrast and readability**
* Use consistent spacing and typography
* Avoid clutter

---

## Themes

* The project uses a **green and white theme**
* Ensure proper color usage and contrast throughout the UI

Use the following color definitions (based on Flutter):

* `kPrimaryGreen = Color(0xFF8EDB6C)`
* `kDarkText = Color(0xFF1A1A1A)`
* `kLightText = Color(0xFF6B6B6B)`
* `kInputBorder = Color(0xFFE0E0E0)`
* `kBg = Colors.white`

### Guidelines

* Use **kPrimaryGreen** for primary buttons, highlights, and accents
* Use **kDarkText** for main text content
* Use **kLightText** for secondary text and descriptions
* Use **kInputBorder** for borders, dividers, and subtle UI elements
* Use **kBg** as the main background color

---

## Deliverables

* A single-page website
* Clean and readable code
* Organized structure:

  * index.html
  * styles (CSS or Tailwind)
  * script.js (if needed)

---

## Notes for the Agent

* Do not overcomplicate the solution
* Focus on clarity and clean UI
* Prioritize responsiveness and usability
* Keep everything easily editable

---

## Optional Enhancements (Nice to Have)

* Scroll progress indicator
* Active navbar section highlighting
* Simple animations (e.g., fade-in on scroll)
* Mobile hamburger menu

---
