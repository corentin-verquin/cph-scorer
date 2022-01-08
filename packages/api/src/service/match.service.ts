import { MatchProvider } from 'provider';
import {
  Team,
  Round,
  Match,
  MatchEntity,
  RoundEntity,
  TeamEntity,
} from 'model';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MatchService implements MatchProvider {
  constructor(
    @InjectRepository(MatchEntity)
    private readonly matchRepository: Repository<MatchEntity>,
  ) {}

  public async insert(teams: Team[], round: Round): Promise<Match> {
    const match = new MatchEntity();
    const roundEntity = new RoundEntity();
    roundEntity.fromModel(round);

    const team1 = new TeamEntity();
    team1.fromModel(teams[0]);
    const team2 = new TeamEntity();
    team2.fromModel(teams[1]);

    match.round = roundEntity;
    match.teamOne = team1;
    match.teamTwo = team2;

    return (await this.matchRepository.save(match)).toModel();
  }
}
