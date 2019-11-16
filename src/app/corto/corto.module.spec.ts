import { CortoModule } from './corto.module';

describe('CortoModule', () => {
  let cortoModule: CortoModule;

  beforeEach(() => {
    cortoModule = new CortoModule();
  });

  it('should create an instance', () => {
    expect(cortoModule).toBeTruthy();
  });
});
