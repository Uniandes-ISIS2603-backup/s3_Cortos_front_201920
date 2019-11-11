import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';
import { CineastaListComponent } from './cineasta-list.component';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { CineastaService } from '../cineasta.service';
import { Cineasta } from '../cineasta';

describe('CineastaListComponent', () => {
    let component: CineastaListComponent;
    let fixture: ComponentFixture<CineastaListComponent>;
    const cineastas: Cineasta[] = require('../../../assets/authors.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{ provide: APP_BASE_HREF, useValue: '' }, CineastaService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CineastaListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should have a list of cineastas', () => {
        component.cineastas = cineastas;
        expect(component.cineastas.length).toEqual(cineastas.length);
    });

    it('a author should be a author (first and last)', () => {
        component.cineastas = cineastas;
        expect(component.cineastas[0].nombre).toEqual(cineastas[0].nombre);
        expect(component.cineastas[cineastas.length - 1].nombre).toEqual(cineastas[cineastas.length - 1].nombre);
    });
});