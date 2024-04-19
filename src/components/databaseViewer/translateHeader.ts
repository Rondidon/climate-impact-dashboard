import { TFunction } from "i18next";

export const translateTableHeader = (
  key: string,
  t: TFunction<"translation", undefined>
) => {
  if (key.includes("co2_")) {
    return key.replace("co2_", "");
  }
  if (key === "companyName") {
    return t("routes.databaseviewer.companyName");
  }
  if (key === "countryName") {
    return t("routes.databaseviewer.countryName");
  }
  if (key === "countryCode") {
    return t("routes.databaseviewer.countryCode");
  }
  return key;
};
