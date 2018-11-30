module.exports = {

    mode: 'development',

    entry: './src/fcklibjs.ts',
    output:{
        path:`${__dirname}/dist`,
        filename:'fcklib.js',
        //umd形式での出力
        library: "fcklib",
        libraryTarget: "umd"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader'
        }
      ]
    },
    resolve: {
      extensions: [
        '.ts','.js'
      ]
    }
  };
  