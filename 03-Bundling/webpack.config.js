export default {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js',
    clean: true,
  },
};