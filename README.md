# Portfolio V2

<br>

## Background

Originally built with Vite and hosted on GitHub pages, I decided to take the opportunity to migrate this project to Vercel so I could utilize the Next.js package. The platform wasn't exactly the issue, though. (To be honest, `nekorosys.vercel.app` just sounds better than `nekorosys.github.io` but that's not the entire point of this project) It's just that the old version had a messy codebase written by someone who didn't really have any idea how React, Tailwind, and TypeScript works (me :P). After gaining enough extensive knowledge on the tech stack in question, I decided to make the website my own and rewrite everything from scratch; with modularity, consistency, and layout responsiveness in mind!

<br>

## Tech Stack

- Vercel - Hosting
- Next.js (React) - Frontend Framework
- Tailwind CSS - Styling
- TypeScript - Programming Language
- [Motion Primitives](https://motion-primitives.com/) - Pre-made animated and interactive React + Tailwind components

<br>

## Features

- Uses Next.js - SEO, has out-of-box routing, and is more optimized than base React.
- Type-safety - TypeScript provides the comfort of knowing the codebase is maintainable and parameters won't accidentally cause errors.
- Data-driven Static CMS - Page files only hold the layout. All the displayed information are exported and mapped out from separate `.ts` files where they are more readable and easier to modify, without the daunting feeling of looking at the entire JSX element tree.
- Responsive User Interface - Utilizes Tailwind's breakpoints to dynamically adjust the website layout depending on the size of the screen without affecting DOM count.
- Implements DRY Principle - Redundancy is reduced wherever possible. Anything that can be repeated has been made to dynamically repeat themselves through code; and components with similar functions are made to properly inherit from base functions.
