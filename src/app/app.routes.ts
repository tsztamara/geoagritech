import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { CookiePolicy } from './pages/cookie-policy/cookie-policy';
import { Impressum } from './pages/impressum/impressum';

export const routes: Routes = [
  {
    path: 'adatkezelesi-tajekoztato',
    component: PrivacyPolicy,
  },
  {
    path: 'cookie-tajekoztato',
    component: CookiePolicy,
  },
  {
    path: 'impresszum',
    component: Impressum,
  },
  { path: '', component: Home },
  { path: '**', redirectTo: '' },
];
