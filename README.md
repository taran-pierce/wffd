# WFFD
More to come soon on what this is going to do.

## Dependencies
  * Nextjs
  * YelpFusion

## Instructions
  * Clone repo
  * `npm install`
  * Create `.env.local` file
  * Create account with Yelp for their API
  * Update `.env.local` to use your API Key
  * `npm run dev`

## Current Status
  * Has main page with search bar
  * searching takes you to results page
    * results page catches all routes in `/search/` and uses the URI to hit Yelp and make searches