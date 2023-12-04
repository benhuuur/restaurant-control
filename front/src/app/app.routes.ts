import { Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AdmScreenComponent } from './adm-screen/adm-screen.component';
import { AdmTotemScreenComponent } from './adm-totem-screen/adm-totem-screen.component';
import { AdmRequestsScreenComponent } from './adm-requests-screen/adm-requests-screen.component';
import { AdmDashboardScreenComponent } from './adm-dashboard-screen/adm-dashboard-screen.component';
import { AdmProductsManagementScreenComponent } from './adm-products-management-screen/adm-products-management-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { ClientOffersScreenComponent } from './client-offers-screen/client-offers-screen.component';
import { ClientScreenComponent } from './client-screen/client-screen.component';
import { AdmTotemProductsScrceenComponent } from './adm-totem-products-scrceen/adm-totem-products-scrceen.component';
import { AdmTotemOffersScrceenComponent } from './adm-totem-offers-scrceen/adm-totem-offers-scrceen.component';
import { AdmTotemCartScrceenComponent } from './adm-totem-cart-scrceen/adm-totem-cart-scrceen.component';

export const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  {
    path: 'adm',
    children: [
      { path: '', component: AdmScreenComponent },
      {
        path: 'totem',
        children: [
          {
            path: '',
            component: AdmTotemScreenComponent,
          },
          {
            path: 'products',
            component: AdmTotemProductsScrceenComponent
          },
          {
            path: 'offers',
            component: AdmTotemOffersScrceenComponent
          },
          {
            path: 'cart',
            component: AdmTotemCartScrceenComponent
          }
        ],
      },
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
      { path: '', component: ClientOffersScreenComponent },
    ],
  },
  {
    path: 'register',
    component: RegisterScreenComponent,
  },
];
