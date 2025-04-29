import "./App.css";
import Header from "./components/layout/Header";
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "./locales/translationsEn";
import translationsRu from "./locales/translationsRu";
import translationsUz from "./locales/translationsUz";

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: translationsEn},
    ru: {translation: translationsRu},
    uz: {translation: translationsUz},
  },
  lng: "ru", // Change this value to switch languages
  fallbackLng: "ru", // if user language isn't available, use en as fallback
});

function App() {

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
