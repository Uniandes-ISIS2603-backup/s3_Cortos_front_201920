import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { AppModule } from '../../app.module';
import { CineastaDetailComponent } from './cineasta-detail.component';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { CineastaService } from '../cineasta.service';
import { Cineasta } from '../cineasta';

describe('CineastaDetailComponent', () => {
    let component: CineastaDetailComponent;
    let fixture: ComponentFixture<CineastaDetailComponent>;

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
        fixture = TestBed.createComponent(CineastaDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

});