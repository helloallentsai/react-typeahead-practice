module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'app.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: [/\.jsx$/],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
