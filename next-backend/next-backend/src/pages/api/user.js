// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dummyData } from "../../utils/dummyData";

export const handler = async (req, res) => {
  const res = await fetch("https://dev.to/api/articles/1747862");
  const data = await res.json();
  return res.status(200).json(data);
  //json ni body hesgiig butsaadag
};

export default handler;
