import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetRanking } from '../../core/get-ranking';
import { RankingDTO } from '../../helper/DTO/ranking.dto';
import { TypeDTO } from '../../helper/DTO/type.dto';
import { Ranking } from '../../model';
import { RankingService } from '../../service';

@Controller('ranking')
@ApiTags('Tournament')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Get('/:type')
  @ApiOkResponse({
    description: 'Get rankingof a type tournament',
    type: [RankingDTO],
  })
  async get(@Param() { type }: TypeDTO): Promise<Ranking[]> {
    const useCase = new GetRanking(this.rankingService);

    return await useCase.exec(type);
  }
}
