#  Propsoch – Redesigned Landing Page

This project is a **redesign and improvement** of the Propsoch landing page.  
The goal was to analyze the existing website and rebuild it with:

- Better UX/UI  
- Improved responsiveness  
- Cleaner code structure  
- Modern animations  

Built as part of an assignment using **Next.js + TypeScript + Tailwind CSS**.

---

## 🔍 Part 1: Analysis of Original Website

Original website: https://www.propsoch.com/

### Lighthouse Scores (Original)

| Metric | Score |
|--------|-------|
| Performance | 61 |
| Accessibility | 71 |
| Best Practices | 73 |
| SEO | 100 |

### Key Issues from Lighthouse

- High **Total Blocking Time (2310ms)**
- Large JavaScript bundles
- Images not optimized
- Accessibility warnings

---

##  UX / UI Issues Found

### 1. Heavy & slow hero section
- Large images not optimized  
- Too many blocking scripts  

**Fix:**  
Used `next/image`, reduced image sizes, and lazy loading.

---

### 2. Poor mobile experience
- Text feels crowded  
- Sections stacked badly  
- Dropdown menus hard to use on touch  

**Fix:**  
Rebuilt layout using mobile-first responsive design.

---

### 3. Visual overload
- Too many colors  
- No spacing rhythm  
- Dense content  

**Fix:**  
Used consistent spacing, simpler color palette, clean typography.

---

### 4. Accessibility issues
- Missing labels  
- Poor contrast  
- Dialogs without titles  

**Fix:**  
Used shadcn/ui + Radix accessibility rules.

---

### 5. No clear user flow
- Too many CTAs  
- No visual hierarchy  

**Fix:**  
Reordered sections into a clear journey:

Hero → Stats → Testimonials → Features → Comparison → CTA

---

## Part 2: What I Built

I rebuilt the landing page **in my own style**, keeping the business idea but improving UX.

### Implemented Sections

- Redesigned Hero section  
- Stats & social proof  
- Testimonials carousel  
- Comparison table  
- Smart savings section  
- Accordion features  
- Animated CTA  
- Blog marquee  
- Community FAQ  
- Premium animated footer  

---

## Responsiveness

The website is fully responsive:

| Device | Behavior |
|--------|----------|
| Mobile | Single column, hamburger menu |
| Tablet | Drawer navigation |
| Desktop | Full navigation & multi-column layout |

Built using Tailwind breakpoints.

---

## Improvements Over Original

### Performance
- Optimized images with `next/image`
- Reduced layout shifts
- Lazy loaded sections

### UX
- Clear visual hierarchy
- Better spacing
- Fewer distractions
- Thumb-friendly mobile UI

### UI
- Modern SaaS style
- Consistent typography
- Subtle animations

---

##  Animations

### Implemented
- Framer Motion for text effects  
- Carousel transitions  
- CTA hover effects  

### Planned
- GSAP scroll animations  
- Section reveal effects  
- Parallax hero  

---

## 🛠 Tech Stack

- Next.js (App Router)  
- TypeScript  
- Tailwind CSS  
- shadcn/ui  
- Framer Motion  
- Lucide Icons  

---

## How to Run Locally

```bash
git clone https://github.com/pittu777/propsoch.git
cd project
npm install
npm run dev