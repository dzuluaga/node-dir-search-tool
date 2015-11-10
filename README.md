node-dir-search
===============
Node Dir Search is a utility used to search an array of keywords in files stored in folder on the filesystem. It leverages [node-dir](https://www.npmjs.com/package/node-dir). The output of the search is stored as key value (arrays).

Examples
=======

##### All keywords
The following command will search for file matching keywords in keywords.json file and return a key/value output and store it as a json file.
```shell
$ node app.js ~TOOLS/git/nucleus > UsedByJSON.json
```

##### Only not found keywords
```shell
$ node app.js ~TOOLS_APIGEE/git/nucleus --only-empty > notUsedByJSON.json
```

Utilities
==========
[ConvertCSV.com](http://www.convertcsv.com/csv-to-json.htm) utility converts a list of strings into a JSON array.

TODO
=======
* Make it a shell command
* Publish it to NPM
* Implement command.js to make it more user-friendly