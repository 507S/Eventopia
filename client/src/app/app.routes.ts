import { Routes } from '@angular/router';
import { clientRoutes } from './Routes/client.routes';
import { adminRoutes } from './Routes/admin.routes';


export const routes: Routes = [
 
    ...clientRoutes,
    ...adminRoutes
];
