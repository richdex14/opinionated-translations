---
title: 'Welcome to the Blog'
description: 'A demo post with inline toggleable text.'
date: 2026-06-22
tags: ['demo', 'astro']
---

This is your first blog post! The Toggle component lets you hide and reveal text inline.

Click the text below to reveal a hidden message:

<Toggle trigger="[click to reveal]">This text was hidden until you clicked!</Toggle>

You can also use it mid-sentence. The quick brown fox <Toggle trigger="jumps">actually leaps gracefully</Toggle> over the lazy dog.

## Features

- **Static-first**: Pages are pre-rendered for speed
- **MDX content**: Write posts in Markdown with JSX components
- **Toggle component**: Inline show/hide for interactive text
- **Content collections**: Type-safe content management

Here's another toggle with a longer trigger:

<Toggle trigger="[show explanation]">This is how you can provide expandable explanations without cluttering the main text. Readers who want more detail can click to expand.</Toggle>
