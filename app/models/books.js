

exports.definition = {
    config: {
 "columns": {
 "title": "String",
 "author": "String"
        },
 "defaults": {
 "title": "-",
 "author": "-"
        },
 "adapter": {
 "type": "sql",
 "collection_name": "books"
        }
    }
};