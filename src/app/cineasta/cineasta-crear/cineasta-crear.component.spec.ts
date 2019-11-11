import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { AppModule } from '../../app.module';
import { CineastaCrearComponent } from './cineasta-crear.component';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { CineastaService } from '../cineasta.service';
import { Cineasta } from '../cineasta';

describe('CineastaCrearComponent', () => {
    let component: CineastaCrearComponent;
    let fixture: ComponentFixture<CineastaCrearComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                },
                CineastaService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            paramMap: convertToParamMap({ id: 100 })
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CineastaCrearComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

});