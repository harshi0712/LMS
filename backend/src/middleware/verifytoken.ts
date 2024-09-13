import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export const verifyStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Extract the role from the request body
        const { role } = req.body;
        // Extract the token from the 'Authorization' header 
        let token = req.headers.authorization?.split(' ')[1]

        // Check if the token is missing
        if (!token)
            return res.status(401).json({ message: "Token is missing" });

        // Determine the secret key based on the user role
        const secretKey = role === 'student' ? process.env.userSecreatKey :
            role === 'admin' ? process.env.adminSecreatKey :
                role === 'instructor' ? process.env.instructorSecreatKey : '';


        // Verify the token with the secret key
        // Throws an error if the token is invalid or expired
        verify(token, secretKey as string);

        // Token is valid, proceed to the next middleware or route handler
        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({ Error: "Internal server error" });
    }
}