Deployed version: https://salt-ai-p7y1.vercel.app/ 

Used: React, Next.js, framer motion, react-spring/parallax

Details:

Created 4 screens

1920x1080 as per the design. The specifications stated "Ensure responsiveness across different devices." However, there are no designs for other devices, and more time is needed to cover all devices.

I didn't have time to make icons with SVG, so I added them as PNGs - ideally, they should have been SVG.

Brief feedback on the test:

- It's very good that there is a UI kit and a working prototype.
- I liked that an example of the implementation of another site was provided.
- It would have been easier if the candidate was added to the team to use Dev Mode in Figma.
- The story with different variants was a bit unclear: on the left, there is a complete website with one design and texts, and on the right, it is divided into sections with a completely different design. I worked according to the right one, because at least on the prototype, you can see how animations and interactions happen.
- Some buttons in the design are not specified as buttons but shown as text.
- I would have liked the sizes to be unified as well because the paddings in buttons are different in some places by a few pixels.
- Texts could also be added to the UI kit.
- The main problem was with the planet on the main screen, which is not a PNG. Its background differs from the landing background, so I had to change the black background of the landing to match the one in the photo, to make it less noticeable that the image has square edges.
- The glowing blobs on the first screen (orange and blue) had to be additionally blurred because they break a lot upon export and don't look the same at all.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First run 
```bash
nvm use
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
