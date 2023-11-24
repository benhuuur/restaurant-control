import { Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AdmScreenComponent } from './adm-screen/adm-screen.component';
import { AdmTotemScreenComponent } from './adm-totem-screen/adm-totem-screen.component';
import { AdmRequestsScreenComponent } from './adm-requests-screen/adm-requests-screen.component';
import { AdmDashboardScreenComponent } from './adm-dashboard-screen/adm-dashboard-screen.component';
import { AdmProductsManagementScreenComponent } from './adm-products-management-screen/adm-products-management-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { ClientProductsScreenComponent } from './client-products-screen/client-products-screen.component';
import { ClientOffersScreenComponent } from './client-offers-screen/client-offers-screen.component';

export const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  {
    path: 'adm',
    children: [
      { path: '', component: AdmScreenComponent },
      { path: 'totem', component: AdmTotemScreenComponent },
      { path: 'requests', component: AdmRequestsScreenComponent },
      { path: 'dashboard', component: AdmDashboardScreenComponent },
      {
        path: 'products-management',
        component: AdmProductsManagementScreenComponent,
      },
    ],
  },
  {
    path: 'client',
    children: [
      { path: 'products', component: ClientProductsScreenComponent },
      { path: 'offers', component: ClientOffersScreenComponent },
    ],
  },
  {
    path: 'register',
    component: RegisterScreenComponent,
  },
];
