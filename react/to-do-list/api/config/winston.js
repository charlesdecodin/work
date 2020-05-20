const {createLogger, format, transports} = require('winston')

const logger = createLogger({
    format: format.combine(
        format.simple()
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'combined.log'})
    ]
});

module.exports = {
    logger,
}