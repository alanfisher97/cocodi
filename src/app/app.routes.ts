import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OfertaComponent } from './oferta/oferta.component';
import { CongresosComponent } from './congresos/congresos.component';


export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },
    {
        path: 'about',
        component:AboutComponent
    },
    {
        path: 'oferta',
        component:OfertaComponent
    },
    {
        path: 'congresos',
        component:CongresosComponent
    },
];
