import get from "lodash/get";
import truncate from "lodash/truncate";

const isEnableLang = lang => {
    switch (lang) {
        case "uz":
            return true;
        case "ru":
            return true;
        case "en":
            return true;
        case "oz":
            return true;
        default:
            return false;
    }
};

const generateNewPath = (langCode, item, key = "slug") => {
    let newPath = "";
    const pathname = window.location.pathname;
    const splitPath = pathname.split("/");
    let _l = get(item, "translations", []).find(i => i.lang === langCode);
    let hasL = isEnableLang(splitPath[1]);

    if (item) {
        if (_l) {
            let beingArr = ["", langCode];
            let arr = [];
            if (hasL) {
                arr = [...beingArr, splitPath[2], _l[key]];
            } else {
                arr = [...beingArr, splitPath[1], _l[key]];
            }
            newPath = arr.join("/");
        } else {
            let beingArr = ["", langCode];
            newPath = beingArr.join("/");
        }
    }

    if (!item) {
        if (isEnableLang(splitPath[1])) {
            splitPath[1] = langCode;

            newPath = splitPath.join("/");
        } else {
            let beingArr = ["", langCode];
            let arr = [...beingArr, ...splitPath.slice(1)];

            newPath = arr.join("/");
        }
    }

    return newPath;
};

const cutStringText = (word, length, last) => {
    if (typeof word === "string") {
        return truncate(word, {
            length: length,
            omission: last ? last : "..."
        });
    } else {
        return null;
    }
};






/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    isEnableLang,
    generateNewPath,
    cutStringText,

};
