export type AppRoute =
  | "/"
  | "/database"
  | "/co2info"
  | "/participation"
  | "/imprint"
  | "/privacypolicy"
  | "/searchresults"
  | "/404";

export const homeRoute: AppRoute = "/";
export const co2InfoRoute: AppRoute = "/co2info";
export const databaseRoute: AppRoute = "/database";
export const imprintRoute: AppRoute = "/imprint";
export const participationRoute: AppRoute = "/participation";
export const privacyRoute: AppRoute = "/privacypolicy";
export const searchResultsRoute: AppRoute = "/searchresults";
