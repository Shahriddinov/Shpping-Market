import i18next from "i18next";
import {initReactI18next} from "react-i18next";

import uz from "../../lng/uz.json";
import ru from "../../lng/ru.json";

i18next.use(initReactI18next).init({
    resources: {
        uz: {
            translation: uz,
        },
        ru: {
            translation: ru,
        },
    },
    lng: localStorage.getItem("lng") || "uz",
});

export default i18next;