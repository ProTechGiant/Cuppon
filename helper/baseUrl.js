const baseUrl =
	process.env.NODE_ENV === "https://cuppon.vercel.app/" ? "" : "http://localhost:3000";

export const JWT_SECRET = "Table@3)";
export default baseUrl;
