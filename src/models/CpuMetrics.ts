import { DataTypes } from 'sequelize';
import database from '../database';

import Metrics from './Metrics';

class CpuMetrics extends Metrics {}

CpuMetrics.init(
  {
    type: {
      type: DataTypes.STRING(100),
    },
    value: {
      type: DataTypes.NUMBER,
    },
    unit: {
      type: DataTypes.STRING(100),
    },
    timestamp: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: database,
  }
);

database.sync();

export default CpuMetrics;
