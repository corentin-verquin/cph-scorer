import { GenerateRound } from '../../src/core/generate-round'
import { MaxCallError } from '../../src/error'
import { Player } from '../../src/model'
import { mock, mockReset } from 'jest-mock-extended'
import { MatchProvider, PlayerProvider, RoundProvider, TeamProvider } from '../../src/provider'

describe('Generate round', () => {
    const mockPlayer = mock<PlayerProvider>()
    const mockRound = mock<RoundProvider>()
    const mockTeam = mock<TeamProvider>()
    const mockMatch = mock<MatchProvider>()

    const playerData = [
        new Player({ id: 'toto-toto-toto-toto-toto' }),
        new Player({ id: 'tata-tata-tata-tata-tata' }),
        new Player({ id: 'tutu-tutu-tutu-tutu-tutu' }),
        new Player({ id: 'titi-titi-titi-titi-titi' }),
    ]
    mockPlayer.listRegister.calledWith().mockResolvedValue(playerData)

    it('Should can generate 3 round with 4 player', async () => {
        const use_case = new GenerateRound(mockPlayer, mockRound, mockTeam, mockMatch)
        const spy = jest.spyOn(mockRound, 'insert')

        expect(use_case).toBeDefined()
        await use_case.execute(3)
        expect(spy).toHaveBeenCalled()
    })

    it('Should\'nt can generate 4 round with 4 player', async () => {
        const use_case = new GenerateRound(mockPlayer, mockRound, mockTeam, mockMatch)

        expect(use_case).toBeDefined()
        return use_case.execute(4).catch(e => expect(e).toBeInstanceOf(MaxCallError))
    })

    it('After generated 3 round with 4 player should have 6 teams', async () => {
        const use_case = new GenerateRound(mockPlayer, mockRound, mockTeam, mockMatch)
        const spy = jest.spyOn(mockTeam, 'insert')

        expect(use_case).toBeDefined()
        await use_case.execute(3)
        expect(spy).toHaveBeenCalledTimes(6)
    })

    it('After generated 3 round with 4 player should have 3 matchs', async () => {
        const use_case = new GenerateRound(mockPlayer, mockRound, mockTeam, mockMatch)
        const spy = jest.spyOn(mockMatch, 'insert')

        expect(use_case).toBeDefined()
        await use_case.execute(3)
        expect(spy).toHaveBeenCalledTimes(3)
    })

    it('Should can i generate round with odd player number', async () => {
        mockReset(mockPlayer)
        mockPlayer.listRegister.calledWith().mockReturnValue([
            ...playerData ,
            new Player({ id: 'toto-toto-toto-toto-toto2' })
        ] as  any)

        const use_case = new GenerateRound(mockPlayer, mockRound, mockTeam, mockMatch)
        const spy = jest.spyOn(mockRound, 'insert')

        expect(use_case).toBeDefined()
        await use_case.execute(1)
        expect(spy).toHaveBeenCalled()
    })
})