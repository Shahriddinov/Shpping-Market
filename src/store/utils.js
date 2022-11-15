import camelCase from "lodash/camelCase";

const importAll = (requireContext, removeFromName = "") => {
    return requireContext
        .keys()
        .reduce(
            (modules, module) => ({
                ...modules,
                [camelCase(module.replace(removeFromName, ""))]: requireContext(module).default
            }),
            {}
        );
};

export {
    importAll
};