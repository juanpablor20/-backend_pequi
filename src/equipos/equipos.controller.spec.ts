import { Test, TestingModule } from '@nestjs/testing';
import { EquipoController } from './equipos.controller';

describe('EquiposController', () => {
  let controller: EquipoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquipoController],
    }).compile();

    controller = module.get<EquipoController>(EquipoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
