import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {sharedRoutes} from "../shared.routes";
import {AuthGuard} from "../guards/auth.guard";

function getChildren(firstItem: any) {
  // console.log(sharedRoutes);
  return [firstItem,...sharedRoutes];
}

export const routes: Routes = [
  {
    path: 'tabs',
    canActivate: [AuthGuard],
    component: TabsPage,
    children: [
      {
        path: 'home',
        canActivate: [AuthGuard],
        children: getChildren(
  {
            path: '',
            loadComponent: () => import('../home/home.page').then((m) => m.HomePage),
          }
        )
      },
      {
        path: 'play',
        canActivate: [AuthGuard],
        children: getChildren(
          {
            path: '',
            loadComponent: () =>
              import('../play/play.page').then((m) => m.PlayPage),
          }
        )
      },
      {
        path: 'chats',
        canActivate: [AuthGuard],
        children: getChildren(
          {
            path: '',
            loadComponent: () =>
              import('../chats/chats.page').then((m) => m.ChatsPage),
          }
        )
      },
      {
        path: 'discover',
        canActivate: [AuthGuard],
        children: getChildren(
          {
            path: '',
            loadComponent: () =>
              import('../discover/discover.page').then((m) => m.DiscoverPage),
          }
        )
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        children: getChildren(
          {
            path: '',
            loadComponent: () =>
              import('../profile/profile.page').then((m) => m.ProfilePage),
          }
        )
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
