import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response<{ status: string }>) => {
  res.json({ status: "OK" });
});

export default router;
