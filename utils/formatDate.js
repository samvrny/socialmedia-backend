const dayjs = require("dayjs")

const formatDate = function(date) {
    let formattedDate = dayjs(date).format('MM/DD/YYYY');
    return formattedDate;
};

module.exports = formatDate;