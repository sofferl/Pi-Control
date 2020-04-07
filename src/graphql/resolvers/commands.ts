import { exec } from 'child_process';

export default {
  restart: (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      // TODO: Move to lib
      exec('shutdown -r now', (error, stdout, stderr) => {
        if (error) {
          reject(stderr);
        } else {
          resolve();
        }
      });
    });
  },
  shutdown: (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      // TODO: Move to lib
      exec('shutdown -h now', (error, stdout, stderr) => {
        if (error) {
          reject(stderr);
        } else {
          resolve();
        }
      });
    });
  },
};
