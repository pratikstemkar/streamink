// Without defined matcher, this applies next-auth to entire project
export { default } from "next-auth/middleware";

export const config = { matcher: ["/user"] };
