export const ROUTES = {
  HOME: "/",
  INBOX: "/inbox",
  ARTICLE: (id: string) => `/articles/${id}`,
  FOLLOW: "/follow",
  SETTING: "/setting",
} as const;
