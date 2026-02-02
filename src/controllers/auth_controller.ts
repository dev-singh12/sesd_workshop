import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userRepository } from "../prisma_logic/user";
import { ApiError } from "../utils/api_error";
import { assertUser } from "../utils/assert";

interface RegisterData {
    name: string;
    email: string;
    password: string;
}

interface AuthResponse {
    user: {
        id: number;
        name: string;
        email: string;
    };
    token: string;
}

class AuthService {

    
    async register(data: RegisterData): Promise<AuthResponse> {
        const { name, email, password } = data;

 
        const existingUser = await userRepository.findByEmail(email);
        if (existingUser) {
            throw new ApiError(400, "User already exists");
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const user = await userRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        assertUser(user, "Failed to create user");

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

    
    async login(email: string, password: string): Promise<AuthResponse> {
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

    private generateToken(userId: number): string {
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("JWT_SECRET is not defined");

        return jwt.sign({ id: userId }, secret, { expiresIn: "1d" });
    }
}

export const authService = new AuthService();

