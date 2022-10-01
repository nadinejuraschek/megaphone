interface ILogger {
  debug: (message: string, value?: any) => void;
  error: (message: string, value?: any) => void;
  info: (message: string, value?: any) => void;
}

const logger = (module: string): ILogger => {
  return {
    debug: (message: string, value: any): void => console.log(`%c [${module}] ${message} `, 'background: cornsild; color: gold;', value ? value : ''),
    error: (message: string, value: any): void => console.log(`%c [${module}] ${message} `, 'background: pink; color: red;', value ? value : ''),
    info: (message: string, value: any): void => console.log(`%c [${module}] ${message} `, 'background: honeydew; color: green;', value ? value : ''),
  };
};

export default logger;