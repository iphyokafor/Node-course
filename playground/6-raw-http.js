const https = require('https')
const url = 'https://api.darksky.net/forecast/573f119426159b4db7d9e225c08e5a01/40, -75'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})
request.on('error', (error) => {
    console.log('An error', error)
})

request.end()