import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Cineasta } from './cineasta';
import { CineastaService } from './cineasta.service';
import { AppModule } from '../app.module';


describe('Service: CineastaService', () => {
    let injector: TestBed;
    let service: CineastaService;
    const cineastas: Cineasta[] = require('../../assets/cineastas.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{ provide: APP_BASE_HREF, useValue: '' }, CineastaService]
        });
        injector = getTestBed();
        service = injector.get(CineastaService);
    });

    it('#getCineastas should return value from observable',
        (done: DoneFn) => {
            service.getCineastas().subscribe(value => {
                expect(value.length).toBeGreaterThan(0);
                done();
            });
        });

    it('#getCineastaDetail should return an existing cineasta',
        (done: DoneFn) => {
            service.getCineastaDetail(cineastas[0].id).subscribe(value => {
                expect(value.nombre).toEqual(cineastas[0].nombre);
                done();
            });
        });

    it('#createCineasta should return the author created',
        (done: DoneFn) => {
            service.createCineasta(cineastas[0]).subscribe(value => {
                expect(value.nombre).toEqual(cineastas[0].nombre);
                done();
            });
        });

    it('#updateCineasta should return the author updated',
        (done: DoneFn) => {
            service.createCineasta(cineastas[0]).subscribe(value => { });
            service.updateCineasta(cineastas[0]).subscribe(value => {
                expect(value.nombre).toEqual(cineastas[0].nombre);
                done();
            });
        });

});