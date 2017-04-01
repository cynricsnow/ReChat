const webpack = require('webpack');

module.exports = {
    context: `${__dirname}/views`,
    entry: {
        main: [
            'webpack-hot-middleware/client',
            './index.js'
        ]
    },
    output: {
        path: `${__dirname}/public`,
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'react-hot-loader'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react'],
                            plugins: [['import', { libraryName: 'antd', style: 'css' }]]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                //exclude: /node_modules/,
                include: /components/,
                use: [
                    'style-loader',
                    'css-loader?modules'
                ]
            },
            {
                test: /\.css$/,
                //include: /node_modules/,
                exclude: /components/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    'url-loader?limit=10000'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
