const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/ts'), // ts に変更
        },
        extensions: [".ts", ".tsx", ".js"] // 解決可能な拡張子として `.ts`と` .tsx`を追加します。
    },
};
