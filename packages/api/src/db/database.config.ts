import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import {
  PlayerEntity,
  TeamEntity,
  MatchEntity,
  RoundEntity,
  RankingEntity
} from '../model'
import configuration from '../app/app.config'

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: configuration.database,
  entities: [PlayerEntity, TeamEntity, MatchEntity, RoundEntity, RankingEntity]
}

if (configuration.env === 'production') {
  Object.assign(config, {
    extra: {
      ssl: { rejectUnauthorized: false }
    }
  })
}

// create db schema and import demo seed from tests to provide sample for front end during developpement
if (configuration.needImport) {
  void import('../../test/e2e/0-seed').then((module) => {
    Object.assign(config, {
      synchronize: true,
      migrations: [module.Seed1617737108784],
      migrationsRun: true
    })
  })
}

export default config
