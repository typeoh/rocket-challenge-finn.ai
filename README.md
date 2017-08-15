# Finn code challenge

This is an exercise to help us get a sense of how you think. Don't worry about knowing the latest trendy tools, but don't be shy to get creative.

Your submission will be reviewed by a member of our engineering team, who will check the implementation for readability, simplicity, durability, and functional completeness.

For bonus points, use standard ES6 syntax where appropriate. E.g. classes, destructuring assignment, and promises.

## Step 0: Product description

We are going to build a small tool that lets users view upcoming space launch missions around the world, with some details about each one:

- Name of rocket being launched (e.g. "Falcon 9")
- Space agency responsible for the launch (e.g. "NASA")
- Launch location (e.g. "Cape Canaveral")
- Time of launch
- Wikipedia links for each launch, agency and rocket

## Step 1: Backend

Create a REST API to serve the data to clients.

- Import raw data from this API: https://launchlibrary.net/1.2/docs/api.html
- Avoid using the `mode` parameter
- Can be done when the server starts or as part of the request cycle, or a mix.
- The data may be persisted or remain in memory as you wish.
- Use any web framework, but try to avoid general utilities like async or lodash

## Step 2: Frontend

Display the required data in an intuitive way for the user.

- Use any front end libraries except jQuery

## Step 3: Review

Provide a link to your repo so we can clone and run it.

Thanks!

Finn Engineering
