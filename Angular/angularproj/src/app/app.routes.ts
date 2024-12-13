import { Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { UtdfComponent } from './form/utdf/utdf.component';
import { RtfComponent } from './form/rtf/rtf.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AngformComponent } from './form/angform/angform.component';
import { PipesComponent } from './pipes/pipes.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { ItemComponent } from './item/item.component';
import { ProductdashComponent } from './crud/productdash/productdash.component';
import { ProductaddComponent } from './crud/productadd/productadd.component';
import { ProducteditComponent } from './crud/productedit/productedit.component';
import { authGuard } from './shared/custguard/auth.guard';

export const routes: Routes = [
    {path:"maindashboard",component:MaindashboardComponent,canActivate:[authGuard], children:

    [{path:"databinding",component:DataBindingComponent},

        {path:"parent",component:ParentComponent},
        {path:"item",component:ItemComponent},
        {path:"productdash",component:ProductdashComponent},
        {path:"productadd",component:ProductaddComponent},
        {path:"productedit/:id",component:ProducteditComponent},
   
    {path:"pipe/:id",component:PipesComponent},
   
    {path:"angform",component:AngformComponent,
        children:
        [{path:"utdf",component:UtdfComponent},
        {path:"rtf",component:RtfComponent}]
    },
    {path:"**",component:PagenotfoundComponent}]
    },
    // default routing
    // {path:"login",component:LoginComponent},
    {path:"",redirectTo:"login",pathMatch:"full"},
    // naming routing
    {path:"login",component:LoginComponent},
    
];