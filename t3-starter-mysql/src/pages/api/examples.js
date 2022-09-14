// src/pages/api/examples.ts
import { prisma } from '../../server/db/client';

const examples = async (req, res) => {
  const examples = await prisma.example.findMany();
  res.status(200).json(examples);
};

export default examples;
