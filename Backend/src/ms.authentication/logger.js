import winston from 'winston';
import 'winston-daily-rotate-file';

const customLevelOptions = {
  levels: {
    error: 0,
    warning: 1,
    info: 2,
    debug: 3,
  },
  colors: {
    error: 'red',
    warning: 'yellow',
    info: 'green',
    debug: 'blue',
  },
};

const fileTransporter = new winston.transports.DailyRotateFile({
  dirname: './ms.authentication/logs',
  filename: 'authentication-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH-mm',
  zippedArchive: true,
  maxSize: '1m',
  maxFiles: 3,
  frequency: '1m',
  level: 'debug',
});

const authLogger = winston.createLogger({
  levels: customLevelOptions.levels,
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize({
          all: true,
          colors: customLevelOptions.colors,
        }),
        winston.format.simple(),
      ),
    }),
    fileTransporter,
  ],
});

export default authLogger;
