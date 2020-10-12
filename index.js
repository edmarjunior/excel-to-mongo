const readXlsxFile = require('read-excel-file/node');
const { insertDocuments } = require('./db')

function init () {
    readXlsxFile('./data.xlsx').then((rows) => {
        
        // remove the first row (headers)
        rows.shift()

        const access = rows.map(row => ({
            ip: row[0],
            resource: row[1],
            createAt: new Date(row[2]),
            location: JSON.parse(row[3])
        }))

        console.log('Readed rows: ', access.length)
        
        insertDocuments(access)
    })
}

init()
