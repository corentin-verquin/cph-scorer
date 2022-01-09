import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  PlayerEntity,
  TeamEntity,
  MatchEntity,
  RoundEntity,
  RankingEntity,
} from '../model';
import configuration from '../app/app.config';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: configuration.database,
  entities: [PlayerEntity, TeamEntity, MatchEntity, RoundEntity, RankingEntity],
};

if (configuration.env === 'production') {
  Object.assign(config, {
    extra: {
      ssl: { rejectUnauthorized: false },
    },
  });
}

export default config;
