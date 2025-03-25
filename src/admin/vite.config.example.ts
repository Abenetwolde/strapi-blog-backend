import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
      server: {
        host: '0.0.0.0', // Binds to all network interfaces
        port:  1337, // Use PORT environment variable or default to 3000
      },
    },
  });
};
