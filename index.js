const readXlsxFile = require('read-excel-file/node');
const { insertDocuments } = require('./db')

function init () {
    readXlsxFile('./data.xlsx').then((rows) => {
        const [cols, ...restRows] = rows;

        const access = []

        for (const row of restRows) {
            const accessItem = {
                ip: row[4],
                resource: row[1],
                createAt: new Date(row[3]),
                userId: row[5],
                location: JSON.parse(row[2])
            }

            access.push(accessItem)
        }
        
        console.log('Readed rows: ', access.length)
        
        insertDocuments(access)
    })
}

init()
