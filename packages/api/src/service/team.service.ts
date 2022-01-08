import { TeamProvider } from "provider";
import { Player, Team } from "model";
import { Repository } from "typeorm";
import { PlayerEntity } from "model";
import { TeamEntity } from "model";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TeamService implements TeamProvider {
    constructor(@InjectRepository(TeamEntity) private readonly teamRepository: Repository<TeamEntity>) { }

    public async insert(players: Player[]): Promise<Team> {
        const playerEntity = players.map((x) => {
            const p = new PlayerEntity();
            p.fromModel(x);
            return p;
        });

        const team = new TeamEntity();
        team.players = playerEntity;
        return (await this.teamRepository.save(team)).toModel();
    }

    public async update(id: uuid, score: number): Promise<Team> {
        const team = await this.teamRepository.findOneOrFail({ where: { id } });
        team.score = score;
        return (await this.teamRepository.save(team)).toModel();
    }

    public async deleteAll(): Promise<void> {
        await this.teamRepository
            .createQueryBuilder()
            .delete()
            .from(TeamEntity)
            .execute();
    }
}