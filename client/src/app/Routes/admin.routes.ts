import { Routes } from '@angular/router';
import test from 'node:test';
import { TestComponent } from '../admin/component/test/test.component';


export const adminRoutes: Routes = [

    {
        path: "admin",
        component : TestComponent
    }
    
];
