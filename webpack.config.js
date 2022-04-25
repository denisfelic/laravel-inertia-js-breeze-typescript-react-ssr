const path = require("path");

module.exports = {
    resolve: {
        alias: {
            "@": path.resolve("./resources/ts"),
        },
        extensions: [".ts", ".tsx", ".js", "jsx"],
    },
    devServer: {
        allowedHosts: "all",
    },
};
