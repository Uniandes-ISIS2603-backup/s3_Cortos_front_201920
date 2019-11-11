import { CineastaModule } from './cineasta.module';

describe('CineastaModule', () => {
    let cineastaModule: CineastaModule;

    beforeEach(() => {
        cineastaModule = new CineastaModule();
    });

    it('should create an instance', () => {
        expect(cineastaModule).toBeTruthy();
    });
});