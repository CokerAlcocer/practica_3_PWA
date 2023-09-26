import { pool } from "config/postres";
import { TUser } from "../entities/user";
import { IUserRepository } from "../use-cases/ports/user.repository";

export class UserGateway implements IUserRepository {
    async findAll(): Promise<TUser[]> {
        const query = `SELECT id, username, created_at as "createdAs", last_signin as "lastSignin", 
        s.id as "statusId", s.description, r.id as "roleId", r.description, p.name, p.surame, p.lastname
        FROM users ORDER BY id DESC`;
        const { rows: userRows } = await pool.query(query);
        return userRows.map(user => <TUser>user);
    }
    findById(id: number): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    save(payload: TUser): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    update(payload: TUser): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}