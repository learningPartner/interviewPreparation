import { Routes } from '@angular/router';
import { LifeCycleComponent } from './pages/life-cycle/life-cycle.component';
import { ViewEncapComponent } from './pages/view-encap/view-encap.component';
import { ProxyComponent } from './pages/proxy/proxy.component';
import { RxjsOperatorComponent } from './pages/rxjs-operator/rxjs-operator.component';

export const routes: Routes = [
    {
        path:"life-cycle",
        component:LifeCycleComponent
    },
    {
        path:"view-encap",
        component:ViewEncapComponent
    },
    {
        path:"proxy",
        component:ProxyComponent
    }, 
    {
        path:"rxjs",
        component:RxjsOperatorComponent
    }
];
