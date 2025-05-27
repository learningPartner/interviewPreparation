import { Routes } from '@angular/router';
import { LifeCycleComponent } from './pages/life-cycle/life-cycle.component';
import { ViewEncapComponent } from './pages/view-encap/view-encap.component';
import { ProxyComponent } from './pages/proxy/proxy.component';
import { RxjsOperatorComponent } from './pages/rxjs-operator/rxjs-operator.component';
import { SubBehMapComponent } from './pages/sub-beh-map/sub-beh-map.component';
import { TopicTestComponent } from './pages/topic-test/topic-test.component';
import { SolidComponent } from './pages/solid/solid.component';
import { DesignPatternComponent } from './pages/design-pattern/design-pattern.component';
import { New17FeaturesComponent } from './pages/new17-features/new17-features.component';
import { redirectByRole } from './service/utility';
import { Angular18FeaturesComponent } from './pages/angular18-features/angular18-features.component';
import { UnitTestingComponent } from './pages/unit-testing/unit-testing.component';
import { ComponentBasicComponent } from './pages/component/component-basic/component-basic.component';
import { DirectiveExComponent } from './pages/directive-ex/directive-ex.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: redirectByRole(),
        pathMatch:'full'
    },
    {
        path:"life-cycle",
        component:LifeCycleComponent
    },
    {
        path:"view-encap",
        component:ViewEncapComponent
    },
    {
        path:"angular-18",
        component:Angular18FeaturesComponent
    },
    {
        path:"proxy",
        component:ProxyComponent
    }, 
    {
        path:"component-basic",
        component:ComponentBasicComponent
    }, 
     {
        path:"directive",
        component:DirectiveExComponent
    }, 
    {
        path:"unit-testing",
        component:UnitTestingComponent
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
    }, 
    {
        path:"solid-principles",
        component:SolidComponent
    }, 
    {
        path:"design-pattern",
        component:DesignPatternComponent
    }, 
    {
        path:"17-18-19-new-features",
        component:New17FeaturesComponent
    }
];
