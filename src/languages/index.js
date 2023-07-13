import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        ChessBoard: "Chess Board",
        Calculator: "Calculator",
        Poromodo: "Poromodo",
        HelloWorld: "Hello World",
        ConvertMoney: "ConvertMoney",
        Quotes: "Quotes",
      },
    },
    vi: {
      translation: {
        ChessBoard: "Bàn cờ",
        Calculator: "Máy tính",
        Poromodo: "Đồng hồ",
        HelloWorld: "Xin chào",
        ConvertMoney: "Chuyển tiền",
        Quotes: "Châm ngôn",
      },
    },
  },
});

export default i18n;
