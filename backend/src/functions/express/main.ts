import serverlessExpress from "@vendia/serverless-express";
import express from "express";
import cors from "cors";
import { userRouter } from "./presentation/userRouter";
import { roomRouter } from "./presentation/roomRouter";
import { messageRouter } from "./presentation/messageRouter";

const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/rooms", roomRouter);
app.use("/messages", messageRouter);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

export const handler = serverlessExpress({ app });
