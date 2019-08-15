const path = require('path');

module.exports = {
    mode: "none",
    output: {
        path: path.resolve(__dirname, "src/resource-bundles/reactComponent.resource.application.zip")
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react','latest']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            }
        ]
    }
}
