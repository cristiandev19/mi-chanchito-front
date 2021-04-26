import devConfig from './dev.stage';
import prodConfig from './prod.stage';

const config = {
  dev        : process.env.NODE_ENV !== 'production',
  backendUrl : process.env.NODE_ENV !== 'production' ? devConfig.apiUrl : prodConfig.apiUrl,
};

export default config;
