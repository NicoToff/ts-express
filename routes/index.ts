import { Router, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router: Router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    res.render("index", { title: "TS Express" });
    const newVisit = await prisma.connection.create({
        data: {
            hostname: req.hostname,
            protocol: req.protocol,
            method: req.method,
        },
    });
    console.log(newVisit);
});

export default router;
