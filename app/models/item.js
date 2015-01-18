

var id = 22;

exports.definition = {
    config: {
 "columns": {
 "name": "TEXT",
 "price": "TEXT",
 "id":"TEXT"
        },
 "adapter": {
 "type": "sql",
 "collection_name": "items"
        }
    }
};