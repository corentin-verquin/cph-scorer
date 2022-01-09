import { Test } from "@nestjs/testing"
import { TypeOrmModule } from "@nestjs/typeorm";
import { ValidationPipe } from "@nestjs/common";
import config from "../../src/db/database.config";
import { Seed1617737108784 } from "./0-seed";


export default async function connect(...moduleToLoad: any) {
    const module = await Test.createTestingModule({
        imports: [
            ...moduleToLoad,
            TypeOrmModule.forRoot({
                ...config,
                dropSchema: true,
                synchronize: true,
                migrations: [Seed1617737108784],
                migrationsRun: true
            }),
        ],
    }).compile();

    const app = module.createNestApplication();
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        })
    )
    await app.init();
    return app
}