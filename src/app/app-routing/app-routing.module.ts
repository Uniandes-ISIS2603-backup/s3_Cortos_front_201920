import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteCrearComponent } from '../cliente/cliente-crear/cliente-crear.component';
import { CineastaDetailComponent } from '../cineasta/cineasta-detail/cineasta-detail.component';
import { CineastaListComponent } from '../cineasta/cineasta-list/cineasta-list.component';
import { CineastaCrearComponent } from '../cineasta/cineasta-crear/cineasta-crear.component';
import {ComentarioListComponent} from '../comentario/comentario-list/comentario-list.component';
import {ComentarioDetailComponent} from '../comentario/comentario-detail/comentario-detail.component';
import {ComentarioCreateComponent} from '../comentario/comentario-create/comentario-create.component';
import { HomeComponent } from '../home/home.component';
import {ComentarioModule} from '../comentario/comentario.module'

const routes: Routes = [

    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'clientes',
        children: [{
            path: 'list',
            component: ClienteListComponent
        },
        {
            path: ':id',
            component: ClienteDetailComponent,
            outlet: 'detail'
        }]
    },
    {
        path: 'create',
        component: ClienteCrearComponent
    },
    {
        path: 'cineastas',
        children: [{
            path: 'list',
            component: CineastaListComponent
        },
        {
            path: ':id',
            component: CineastaDetailComponent,
            outlet: 'detail'
        }]
    },
    {
        path: 'comentarios',
        children: [{
            path: 'list',
            component: ComentarioListComponent
        },
        {
            path: ':id',
            component: ComentarioDetailComponent,
            outlet: 'detail'
        }]
    },
    {
        path: 'comentariosCrear',
        component: ComentarioCreateComponent
    },
    {
        path: 'create',
        component: ClienteCrearComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
