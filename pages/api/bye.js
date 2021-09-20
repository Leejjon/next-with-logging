// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    console.log('Running the API route2.');
    res.status(200).json({ name: 'Sjaak Zwart' })
}