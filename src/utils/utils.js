export const getUrlId = (url) => {
    const urlPart = url.substring(url.lastIndexOf('/') - 5, url.lastIndexOf('/'))
    return urlPart.split('/')[1]
}

export const formatDate = (date) => {
    const datePart = date.match(/\d+/g),
        year = datePart[0].substring(0, 4),
        month = datePart[1], day = datePart[2];

    return day + '/' + month + '/' + year;
}