import i18next from "i18next";
import {initReactI18next} from "react-i18next";

import uz from "../../lng/uz.json";
import ru from "../../lng/ru.json";
import en from "../../lng/en.json"

i18next.use(initReactI18next).init({
    resources: {
        uz: {
            translation: uz,
        },
        ru: {
            translation: ru,
        },
        en: {
            translation: en,
        }
    },
    lng: localStorage.getItem("lng") || "uz",
});

export default i18next;