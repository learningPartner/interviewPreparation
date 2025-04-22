import { Routes } from '@angular/router';
import { LifeCycleComponent } from './pages/life-cycle/life-cycle.component';
import { ViewEncapComponent } from './pages/view-encap/view-encap.component';

export const routes: Routes = [
    {
        path:"life-cycle",
        component:LifeCycleComponent
    },
    {
        path:"view-encap",
        component:ViewEncapComponent
    }
];
