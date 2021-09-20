// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import Amplify from "aws-amplify";
import config from "../../aws-exports.js";

// Amplify SSR configuration needs to be done within each API route
// Amplify.configure({ ...config, ssr: true });

export default function handler(req, res) {
  console.log('Running the API route.');
  res.status(200).json({ name: 'John Doe' })
}
