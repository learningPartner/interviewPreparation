import { Routes } from '@angular/router';
import { LifeCycleComponent } from './pages/life-cycle/life-cycle.component';
import { ViewEncapComponent } from './pages/view-encap/view-encap.component';
import { ProxyComponent } from './pages/proxy/proxy.component';
import { RxjsOperatorComponent } from './pages/rxjs-operator/rxjs-operator.component';
import { SubBehMapComponent } from './pages/sub-beh-map/sub-beh-map.component';
import { TopicTestComponent } from './pages/topic-test/topic-test.component';

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
        path:"rxjs-operator",
        component:RxjsOperatorComponent
    }, 
    {
        path:"rxjs-sub-beh-map",
        component:SubBehMapComponent
    }, 
    {
        path:"test-topic",
        component:TopicTestComponent
    }
];
