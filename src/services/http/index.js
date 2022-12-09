import axios from "axios";
import merge from "lodash/merge";

const StatusCode = {
    Unauthorized: 401,
    Forbidden: 403,
    TooManyRequests: 429,
    InternalServerError: 500
};

class Http {
    #instance;

    #defaults = {
        headers: {
            Accept: "/",
            "Content-Type": "application/json"
        }
    };

    get #http() {
        return this.#instance !== null ? this.#instance : this.init();
    }

    init({ config, configFn }) {
        const http = axios.create(merge(this.#defaults, config));

        http.interceptors.request.use(
            config => {
                if (configFn) {
                    const requestConfig = configFn(config);
                    if (requestConfig instanceof Promise) {
                        return requestConfig.then(newConfig => Promise.resolve(merge(config, newConfig)));
                    }

                    return merge(config, requestConfig || {});
                }

                return config;
            },
            error => Promise.reject(error)
        );

        http.interceptors.response.use(
            response => response,
            error => {
                const { response } = error;

                return Http.#handleError(response);
            }
        );
        this.#instance = http;
        return http;
    }

    get request() {
        return this.#http;
    }

    static #handleError(error) {
        const { status } = error || {};

        // eslint-disable-next-line default-case
        switch (status) {
            case StatusCode.InternalServerError: {
                // Handle InternalServerError
                break;
            }
            case StatusCode.Forbidden: {
                // Handle Forbidden
                break;
            }
            case StatusCode.Unauthorized: {
                // Handle Unauthorized
                break;
            }
            case StatusCode.TooManyRequests: {
                // Handle TooManyRequests
                break;
            }
        }

        return Promise.reject(error);
    }
}

export default new Http();
