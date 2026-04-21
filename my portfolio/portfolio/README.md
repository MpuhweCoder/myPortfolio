# Ange — Portfolio Website

A professional multi-page portfolio for Umutoni Ange.
Built with pure HTML, CSS, and JavaScript. No frameworks needed.

---

## File Structure

```
portfolio/
│
├── index.html          ← Home / Hero page
├── about.html          ← About Me page
├── skills.html         ← Technical Skills page
├── projects.html       ← Projects page
├── education.html      ← Education page
├── contact.html        ← Contact page
│
├── css/
│   ├── style.css       ← Global styles (shared by all pages)
│   ├── index.css       ← Home page styles
│   ├── about.css       ← About page styles
│   ├── skills.css      ← Skills page styles
│   ├── projects.css    ← Projects page styles
│   ├── education.css   ← Education page styles
│   └── contact.css     ← Contact page styles
│
├── js/
│   ├── layout.js       ← Injects nav + footer into every page
│   └── main.js         ← Scroll animations, mobile menu, transitions
│
└── images/             ← Put your photos here
    └── ange-photo.jpg  ← YOUR PROFESSIONAL PHOTO (see below)
```

---



### Step 3 — Update index.html (Home page)
Find this block in `index.html`:
```html
<div class="photo-placeholder">
  <div class="photo-initials">UA</div>
  ...
</div>
```
Replace it with:
```html
<img src="images/ange-photo.jpg" alt="Umutoni Ange" class="hero-photo">
```

### Step 4 — Update about.html
Find this block in `about.html`:
```html
<div class="about-photo-placeholder">
  <div class="photo-initials">UA</div>
  ...
</div>
```
Replace it with:
```html
<img src="images/ange-photo.jpg" alt="Umutoni Ange" class="about-photo">
```

## Hosting for Free

### Option 1 — GitHub Pages (Recommended)
1. Create a GitHub repo named `yourusername.github.io`
2. Upload all files keeping the same folder structure
3. Go to Settings → Pages → Source: main branch
4. Your site will be live at `https://yourusername.github.io`

### Option 2 — Netlify (Easiest)
1. Go to netlify.com and sign up free
2. Drag and drop the entire `portfolio/` folder
3. Your site goes live instantly with a URL like `random-name.netlify.app`
4. You can set a custom domain later

### Option 3 — Vercel
1. Go to vercel.com
2. Import from GitHub or drag-drop
3. Instant deployment

---

## Customization Tips

- **Colors**: All color variables are in `css/style.css` under `:root {}`
- **Font**: Change `Syne` (headings) or `DM Sans` (body) in both the Google Fonts link and `style.css`
- **Projects**: Update descriptions and GitHub links in `projects.html`
- **Graduation year**: Search `2027` in all files and update if needed

---

Built by  Umutoni Ange · 2025
