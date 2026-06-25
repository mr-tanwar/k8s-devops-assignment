import { Request, Response, Router } from "express";

const router = Router();

router.get(
  "/",
  (_req: Request, res: Response<{ status: string; version: string }>) => {
    res.json({ status: "OK", version: "v3" });
  },
);

export default router;
