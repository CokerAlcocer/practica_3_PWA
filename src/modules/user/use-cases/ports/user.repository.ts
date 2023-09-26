import { TUser } from "modules/user/entities/user";

export interface IUserRepository {
    findAll(): Promise<TUser[]>,
    findById(id: number): Promise<TUser>,
    save(payload: TUser): Promise<TUser>,
    update(payload: TUser): Promise<TUser>,
    delete(id: number): Promise<boolean>,
}