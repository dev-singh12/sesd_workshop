import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userRepository } from "../prisma_logic/user";
import { ApiError } from "../utils/api_error";
import { assertUser } from "../utils/assert";

class AuthService {
    async login(email: string, password: string) {
        const user = await userRepository.findByEmail(email);

        assertUser(user, "Invalid credentials");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new ApiError(401, "Invalid credentials");
        }

        const token = this.generateToken(user.id);

        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            token,
        };
    }

    private generateToken(userId: number) {
        return jwt.sign(
            { id: userId },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" }
        );
    }
}

export const authService = new AuthService();

