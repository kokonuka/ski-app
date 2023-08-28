import express from "express";
import { UserGateway } from "../infrastructure/userGateway";
import { UserService } from "../application/userService";
import { UserRepository } from "../domain/user/userRepository";

export const userRouter = express.Router();

const userGateway = new UserGateway();
const userService = new UserService();
const userRepository = new UserRepository();

type UserPostRequestBody = {
  auth0UserId: string;
  name: string;
  email: string;
};

// ユーザー作成
userRouter.post(
  "/",
  async (req: express.Request<{}, {}, UserPostRequestBody>, res) => {
    const { auth0UserId, name, email } = req.body;

    try {
      const output = await userService.registerUser(auth0UserId, name, email);

      return res.status(200).json({
        id: output.id,
        auth0User: output.auth0UserId,
        name: output.name,
        email: output.email,
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

// ユーザー一覧
userRouter.get("/", async (_req, res) => {
  try {
    const users = await userGateway.findAll();

    return res.status(200).json(users);
  } catch (err) {
    console.log("ERROR:", err);

    return res.status(400).json({
      data: {
        message: err.message,
      },
    });
  }
});

// ユーザー詳細
userRouter.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userGateway.findForId(id);

    if (!user) throw new Error("Userは存在しません");

    return res.status(200).json(user);
  } catch (err) {
    console.log("ERROR:", err);

    return res.status(400).json({
      data: {
        message: err.message,
      },
    });
  }
});

type UserPutRequestBody = {
  name: string;
  email: string;
};

// ユーザー更新
userRouter.put(
  "/:id",
  async (req: express.Request<{ id: string }, {}, UserPutRequestBody>, res) => {
    const id = req.params.id;
    const { name, email } = req.body;

    try {
      const user = await userRepository.findForId(id);

      if (!user) throw new Error("Userは存在しません");

      await userGateway.update(id, name, email);

      return res.status(200).json({
        id: user.id,
        auth0User: user.auth0UserId,
        name,
        email,
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

// // ユーザー削除
// userRouter.delete("/:id", async (req, res) => {
//   const id = req.params.id;
// });
