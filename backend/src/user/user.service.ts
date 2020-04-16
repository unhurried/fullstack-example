import { Injectable } from '@nestjs/common';

type User = {
    userId: string,
    username: string,
    password: string,
}

@Injectable()
export class UserService {
    private users: User[];

    constructor() {
        // TODO: Externalize User data.
        this.users = [
            {
                userId: '001',
                username: 'johnsmith',
                password: 'password',
            },
        ];
    }

    authenticate(username: string, password: string): User | null {
        const user = this.users.find(u => u.username === username);
        if (user && user.password === password) {
            return user;
        } else {
            return null;
        }
    }
}
