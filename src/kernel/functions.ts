import bycriptjs from 'bcryptjs';

export const hash = async (pass: string): Promise<string> => {
    return await new Promise((res, rej) => {
        bycriptjs.hash(pass, 10, (err, hash) => {
            err ? rej(err) : res(hash);
        });
    });
}

export const compare = async (pass: string, hashed: string): Promise<boolean> => {
    return await new Promise((res, rej) => {
        bycriptjs.compare(pass, hashed, (err, hash) => {
            err ? rej(err) : res(hash);
        });
    });
}