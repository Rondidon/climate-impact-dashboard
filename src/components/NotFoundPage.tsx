import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("routes.404.title")}</h1>
      <p>{t("routes.404.text")}</p>
    </>
  );
};

export default NotFoundPage;
