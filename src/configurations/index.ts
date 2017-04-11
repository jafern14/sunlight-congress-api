const configs = {
  'server': {
    'port': 8000,
    'plugins': [
      'logger',
      'swagger'
    ]
  }
};

export interface IServerConfigurations {
  port: number;
  plugins: Array<string>;
};

export function getServerConfigs(): IServerConfigurations {
  return configs.server;
};
