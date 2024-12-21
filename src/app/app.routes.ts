import { Routes } from '@angular/router';
import { HomeComponent } from './table/home/home.component';

export const routes: Routes = [
    {path:"tables/home", component:HomeComponent},
    {path:"tables",redirectTo: "tables/home",pathMatch:"full"},
    {path:"",redirectTo: "tables/home",pathMatch:"full"}
];
