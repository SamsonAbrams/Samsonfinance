# Finance with Samson

A professional website for the "Finance with Samson" financial newsletter. This website is built with Next.js and Tailwind CSS, providing a modern and responsive user experience.

## Features

- **Home Page**: Showcases the newsletter's value proposition, features, and testimonials
- **About Page**: Detailed information about Samson, his expertise, and credentials
- **Contact Page**: A form for newsletter subscriptions and general inquiries
- **Book a Meeting Page**: Integration with Google Calendar/Meet for scheduling one-on-one consultations

## Technology Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The website can be easily deployed to platforms like Vercel or Netlify.

For Vercel deployment:

```bash
npm install -g vercel
vercel
```

## Customization

To customize the website for your specific needs:

1. Update the content in the page files under `src/app`
2. Replace placeholder images with your own
3. Modify colors and styling in the Tailwind classes
4. Configure your actual Google Calendar booking link in the `handleBookNow` function in `src/app/book/page.tsx`

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

This project is open-source and available under the MIT License.
