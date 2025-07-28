# Strapi Images Setup Guide

## Problem Fixed

✅ Updated `next.config.mjs` to include your Strapi domain: `exuberant-smile-8788e41b5a.strapiapp.com`

## Environment Variables Setup

You need to set the following environment variable in your Vercel deployment:

### Required Environment Variable

```
NEXT_PUBLIC_API_URL=https://exuberant-smile-8788e41b5a.strapiapp.com/api
```

## How to Set Environment Variables in Vercel

1. **Go to your Vercel dashboard**
2. **Select your project**
3. **Go to Settings → Environment Variables**
4. **Add the following variable:**
   - **Name:** `NEXT_PUBLIC_API_URL`
   - **Value:** `https://exuberant-smile-8788e41b5a.strapiapp.com/api`
   - **Environment:** Production (and Preview if needed)

## Verification Steps

1. **Redeploy your app** after setting the environment variable
2. **Check that images load** from your Strapi CMS
3. **Verify the image URLs** are correctly constructed

## Local Development

For local development, create a `.env.local` file with:

```
NEXT_PUBLIC_API_URL=https://exuberant-smile-8788e41b5a.strapiapp.com/api
```

## Image URL Construction

Your app uses the `getFullImageUrl` function in `src/lib/image.js` to construct image URLs:

- It takes the API URL from environment variables
- Removes trailing slashes and `/api` suffix
- Appends the image path

Example:

- Environment: `https://exuberant-smile-8788e41b5a.strapiapp.com/api`
- Image path: `/uploads/image.jpg`
- Final URL: `https://exuberant-smile-8788e41b5a.strapiapp.com/uploads/image.jpg`

## Next.js Image Configuration

The `next.config.mjs` now allows images from:

- `localhost:1337` (development)
- `exuberant-smile-8788e41b5a.strapiapp.com` (production)

This should resolve the image loading issues in your deployed app.
