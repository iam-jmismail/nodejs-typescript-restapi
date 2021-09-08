require("dotenv").config();

export const PORT: number | string = process.env.PORT || 3000;
export const PG_USERNAME: string = process.env.PG_USERNAME || "root";
export const PG_PASSWORD: string = process.env.PG_PASSWORD || "toor";
export const PG_DATABASE: string = process.env.PG_DATABASE || "sample";
export const PG_HOST: string = process.env.PG_HOST || "localhost";
