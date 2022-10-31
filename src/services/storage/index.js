const index = {

    get: (key) => {
        return (window.localStorage && window.localStorage.getItem(key)) || null;
    },

    set: (key, value) => {
        if (!value || value.length <= 0) {
            return;
        }
        if (window.localStorage) {
            window.localStorage.setItem(key, value);
        }
    },

    remove: (key) => {
        if (window.localStorage && window.localStorage[key]) {
            window.localStorage.removeItem(key);
            return true;
        }
    },
};

export default index;