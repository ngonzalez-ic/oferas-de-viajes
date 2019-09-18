const path =require('path');
const HtmlWebpackPluguin =require ('html-webpack-plugin');
const MiniCssExtractPlugin =require ('mini-css-extract-plugin');


module.exports={
    entry:'./src/pages/index.js',
    output: {
        path:path.join(__dirname,'dist'),
        filename:'bundel.js'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use:['babel-loader'],
                exclude: /node_module/,
            },
            {
                test: /\.(png|jpe?g|gif|ico|jfif)$/i,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
              },
              {
                test: /\.(woff|woff2|ttf|eot)$/i,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
              },

              {
                test: /\.(css|sass|scss)$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    ],
              },

        ],
    },
    plugins:[
        new HtmlWebpackPluguin(
            {
                template:'./src/pages/index.html'
            }
        ),
        new MiniCssExtractPlugin (
            {
                filename: 'styles.css'
            }
        ),
    ]
} 