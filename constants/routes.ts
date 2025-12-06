export const ROUTES = {
  HOME: "/",
  INBOX: "/inbox",
  ARTICLE: (id: string) => `/articles/${id}`,
  FOLLOW: "/follow",
  SETTING: "/setting",

  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
} as const;
