// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name } = JSON.parse(req.body);
    res.status(200).json({ name: `Hola, ${name}` })
  } else {
    res.status(200).json({ name: 'Hola!' })
  }
}
