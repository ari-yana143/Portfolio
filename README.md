# Arriane Antioquia Manalo Portfolio

A static personal portfolio website built with HTML, CSS, and vanilla JavaScript for GitHub Pages hosting.

## Project folders

```text
arriane-portfolio/
├── index.html
├── style.css
├── script.js
├── 404.html
├── README.md
├── assets/
│   ├── images/
│   │   ├── favicon.svg
│   │   ├── profile-photo.jpg
│   │   └── social-preview.svg
│   ├── projects/
│   │   ├── Lucky-Beauty/
│   │   │   ├── index.html
│   │   │   ├── css/
│   │   │   ├── fonts/
│   │   │   ├── images/
│   │   │   └── documentation.pdf
│   │   └── Manalo_Manumbale_Activity1_1.zip
│   └── documents/
└── .nojekyll
```

## Customizing content

Update the placeholder content directly in `index.html`:

- Name, tagline, introduction, and bio
- Projects and descriptions
- Skills and categories
- Experience timeline and education details
- Writing interests summary
- Contact links and social URLs

The profile photo is stored in `assets/images/profile-photo.jpg`. Replace that file to update the portrait, keeping the same filename, or change the image path in `index.html`.

The icon-only moon/sun button in the navigation switches between light and dark mode. The selection is remembered in the browser. You can update the light theme colors in the `:root` section of `style.css` and dark theme colors in the `[data-theme="dark"]` section.

The Projects section includes the Lucky Beauty project files and links to the EmoTune GitHub repository. The Barangay Scholarship Management System is listed without a preview, feature list, or technology claims because those details have not been provided.

The prominent contact button opens a prefilled Gmail compose draft. The Email links use a `mailto:` draft in the visitor's email app. The visitor still reviews and sends the message themselves.

To open the local site, open `index.html` in a web browser. To share the site publicly, publish the project with GitHub Pages and use the URL GitHub provides; a local file path only opens on your computer.

## GitHub Pages deployment

### 1. Create a GitHub repository

1. Sign in to GitHub.
2. Click the New repository button.
3. Under your `ari-yana143` account, create a public repository named `Portfolio`.
4. Keep it public or private depending on your preference.
5. Click Create repository.

### 2. Upload the project files

You can either:

- Use GitHub's web interface to upload all files, or
- Use Git commands locally.

Example commands:

```bash
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/ari-yana143/Portfolio.git
git push -u origin main
```

### 3. Configure GitHub Pages

1. Open your repository on GitHub.
2. Go to Settings.
3. Open Pages in the left sidebar.
4. Under Source, choose Deploy from a branch.
5. Select the main branch and the root folder `/`.
6. Save.

### 4. Publish the website

GitHub Pages will generate a website URL. This usually looks like one of the following:

- `https://ari-yana143.github.io/Portfolio/` for this portfolio repository
- `https://ari-yana143.github.io/` for a special `ari-yana143.github.io` repository

### 5. Get your public portfolio URL

After the pages build succeeds, visit the Pages section and copy the live link shown there.

### 6. Test on desktop and mobile

Make sure the website:

- loads properly on mobile screens
- navigation works
- buttons lead to the correct sections
- images and content remain readable
- the portfolio looks polished on both desktop and phone layouts

### 7. Update content and add projects

To edit the site later:

- open `index.html`
- replace placeholder text and links
- add new project cards in the Projects section
- update the writing samples and experience timeline
- keep the style consistent with the current theme

### 8. Add the published link to your social bio

Use the final public URL in your Facebook, Instagram, TikTok, and other social media bios.

## Username GitHub Pages vs project repository

- `username.github.io` repository: This is a special GitHub Pages repository for a personal website. It is typically used for your main portfolio domain.
- Regular project repository: This is used for project sites such as `username.github.io/project-name/`. It is ideal when you want a portfolio repository separate from a personal landing page.

## Notes

- The content is intentionally editable and uses placeholder text until you add your real work.
- Social sharing previews and icons are included as SVG assets.
- EmoTune's source is already in the linked GitHub repository; this portfolio links to that repository rather than duplicating its source code.
- This project is static and works without a backend, making it suitable for GitHub Pages.
- The site is intentionally built with plain HTML, CSS, and JavaScript to stay beginner-friendly and easy to maintain.

## Recommended next steps

- Replace or add real project screenshots only when you have them available.
- Keep the portfolio updated as you complete coursework, projects, and experiences.
