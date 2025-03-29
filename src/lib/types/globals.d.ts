export {};

export type Roles = "admin" | "user" | "author";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
