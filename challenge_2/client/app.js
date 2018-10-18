var convertCSV = (obj) => {
    var keys = [];

    if (keys.length === 0) {
        for (let key in obj) {
            if (key !== 'children') {
                keys.push(key)
            }
        }
    }
    var results = [];

    for (let key of keys) {
        results.push(obj[key]);
    }
    let csvFile = keys.join(',') + '\r\n';
    if (csvFile === undefined) {
        csvFile = '';
    }
    csvFile += results.join(',') + '\r\n';

    if (obj.children.length > 0) {
       for (let i = 0; i <obj.children.length; i++) {
           csvFile += convertCSV(obj.children[i], keys);
       }
    }
    return csvFile;
};

module.exports = convertCSV;