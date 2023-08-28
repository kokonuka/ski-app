import express from "express";
import crypto from "crypto";
import { MessageGateway } from "../infrastructure/messageGateway";

export const messageRouter = express.Router();

const messageGateway = new MessageGateway();

type MessagePostRequestBody = {
  roomId: string;
  userId: string;
  text: string;
};

// メッセージ作成
messageRouter.post(
  "/",
  async (req: express.Request<{}, {}, MessagePostRequestBody>, res) => {
    const { userId, roomId, text } = req.body;

    const id = crypto.randomUUID();
    const createdAt = Date.now();

    try {
      // ルームのupdatedatを更新
      await messageGateway.insert(id, roomId, userId, text, createdAt);

      return res.status(200).json({
        id,
        roomId,
        userId,
        text,
        createdAt,
      });
    } catch (err) {
      console.log("ERROR:", err);

      return res.status(400).json({
        data: {
          message: err.message,
        },
      });
    }
  }
);

// メッセージ一覧
messageRouter.get("/:roomId", async (req, res) => {
  const roomId = req.params.roomId;

  try {
    const items = await messageGateway.findForRoomId(roomId);

    return res.status(200).json(items);
  } catch (err) {
    console.log("ERROR:", err);

    return res.status(400).json({
      data: {
        message: err.message,
      },
    });
  }
});
