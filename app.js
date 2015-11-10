var dir = require('node-dir');
var keywords = require('./keywords.json').keywords;
var directory = process.argv.slice(2)[0] || __dirname;
var result = {};
var onlyEmpty = process.argv.slice(2)[1] || false;

dir.readFiles( directory, { exclude: [/*'keywords.json'*/],
							excludeDir: ['node_modules']
	}, function(err, content, filename, next ) {
		keywords.forEach(function ( keyword ) {
			var resultFiles = result[keyword] || [];
			if( content.indexOf( keyword ) != -1 ){
				resultFiles.push( filename );
			}
			result[keyword] = resultFiles;
		}
	);
        next();
	},function(err, files){
        if (err) throw err;
        if( onlyEmpty ){
        	var onlyEmptyKeywords = {};
        	for ( var keyword in result ){
        		if( result[keyword].length == 0 ){
        			onlyEmptyKeywords[keyword] = result[keyword];

        		}
        	}
        	result = onlyEmptyKeywords;
		}
        console.log( JSON.stringify( result ) );
    });