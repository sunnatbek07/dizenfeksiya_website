import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ruTranslation from "../../../../public/locales/ru.json";
import uzTranslation from "../../../../public/locales/uz.json";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
    },
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
  });

const Faq = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section id="faq">
      <div className="faq_wrapper">
        <h2 data-aos="fade-right">{t("faq")}</h2>
        <div className="accordion" data-aos="fade-left">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t("ftitle1")}
            </AccordionSummary>
            <AccordionDetails>{t("ftext1")}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              {t("ftitle2")}
            </AccordionSummary>
            <AccordionDetails>{t("ftext2")}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t("ftitle3")}
            </AccordionSummary>
            <AccordionDetails>{t("ftext3")}</AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
