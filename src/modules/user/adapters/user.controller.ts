import express, { Request, Response } from "express";
import { UserGateway } from "./user.gateway";
import { GetUsersInteractor } from "../use-cases/get-users.interactor";

export class UserController {
    static async getAll(req: Request, res: Response) {
        try {
            const repository = new UserGateway();
            const interactor = new GetUsersInteractor(repository);
            const data = await interactor.execute();

            res.status(200).json({data, error: false})
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Error'})
        }
    }
}

export const userRouter = express.Router();

userRouter.get('/', [], UserController.getAll);