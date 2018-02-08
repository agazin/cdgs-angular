export interface JWTPayload {
    sub: string;
    userId: string;
    iss: string;
    iat: number;
    nbf: number;
    exp: number;
}
