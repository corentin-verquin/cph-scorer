import { RankingProvider } from 'provider';
import { RankingType, Ranking } from 'model';

export class GetRanking {
  constructor(private readonly rankingProvider: RankingProvider) {}

  public async exec(type: RankingType): Promise<Ranking[]> {
    return await this.rankingProvider.getRanking(type);
  }
}
