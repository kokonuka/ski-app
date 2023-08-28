import express from "express";
import crypto from "crypto";
import { RoomGateway } from "../infrastructure/roomGateway";

export const roomRouter = express.Router();

const roomGateway = new RoomGateway();

type RoomPostRequestBody = {
  creatorId: string;
  memberId: string;
};

// メッセージがない場合、自分が作成者なら

// ルーム作成
roomRouter.post(
  "/",
  async (req: express.Request<{}, {}, RoomPostRequestBody>, res) => {
    const { creatorId, memberId } = req.body;

    const id = crypto.randomUUID();
    const updatedAt = Date.now();

    try {
      // 既にルームがある場合はエラー
      // creatorIdとmemberIdの組み合わせ
      // idが存在しないこと
      // creatortとmemberが違うこと

      await roomGateway.insert(id, creatorId, memberId, updatedAt);

      return res.status(200).json({
        id,
        creatorId,
        memberId,
        updatedAt,
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

// ルーム一覧
roomRouter.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const creatorItems = await roomGateway.findForCreatorId(id);
    const memberItems = await roomGateway.findForMemberId(id);
    const items = [...creatorItems, ...memberItems];
    const sortedItems = items.sort((a, b) => {
      return a.updatedAt - b.updatedAt;
    });

    return res.status(200).json(sortedItems);
  } catch (err) {
    console.log("ERROR:", err);

    return res.status(400).json({
      data: {
        message: err.message,
      },
    });
  }
});
