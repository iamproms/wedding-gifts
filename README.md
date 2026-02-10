# Wedding Gift Landing Page - Rachel & Frank

An elegant, mobile-first landing page designed for guests to easily access bank transfer details for wedding gifts via a QR code.

## 💍 Features
- **Luxury Aesthetic:** Designed with a sophisticated color palette (Burnt Orange, Forest Green, Gold) derived from the wedding invitation.
- **Mobile-First UX:** Optimized for quick access and one-hand use on smartphones.
- **Copy-to-Clipboard:** One-tap account number copying with visual feedback.
- **Respectful Tone:** Carefully crafted language to prioritize guest presence over gifts.
- **Smooth Animations:** Subtle scroll-reveal effects for a premium feel.

## 🚀 Deployment to Netlify

This project is a static site and is perfectly suited for Netlify.

### Option 1: Drag and Drop (Easiest)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag the entire project folder onto the page.
3. Your site will be live instantly!

### Option 2: Connect to GitHub
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select **GitHub** and authorize.
4. Choose the `wedding-gifts` repository.
5. Set the build command to *empty* and the publish directory to `.` (current directory).
6. Click **"Deploy site"**.

## 🛠️ Customization
To update bank details, edit `index.html`:
- Search for `account-card` and update the bank name and account number.
- Update the IDs in the `copyToClipboard` function call if you add more accounts.

## 🎨 Branding
- **Primary:** #B3522C (Burnt Orange)
- **Secondary:** #2D4F2D (Forest Green)
- **Accent:** #D4AF37 (Gold)
- **Typography:** Playfair Display, Great Vibes, Montserrat.
