var path = require('path')
var WebpackConfig = require('themekit-webpack-config')
var config = new WebpackConfig()
	.withEntry('demo')
	.withAlias({
		'app': path.resolve(__dirname, '..')
	})
	.webpack({
		sassLoader: {
			importer: require('sass-importer-npm')
		}
	})
	.use('extract')
	.use('vendor')

module.exports = config