import { Routes } from '@angular/router';

export const sharedRoutes: Routes = [
  {
    path: 'events',
    loadComponent: () => import('./events/events.page').then( m => m.EventsPage)
  },
  {
    path: 'events/:slug/:tab/:sub',
    loadComponent: () => import('./event/event.page').then( m => m.EventPage)
  },
  {
    path: 'events/:slug/:tab',
    loadComponent: () => import('./event/event.page').then( m => m.EventPage)
  },
  {
    path: 'events/:slug',
    loadComponent: () => import('./event/event.page').then( m => m.EventPage)
  },
  {
    path: 'chats/:uuid',
    loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'chats/:uuid/info',
    loadComponent: () => import('./chat/chat-info/chat-info.page').then( m => m.ChatInfoPage)
  },
  {
    path: 'leagues',
    loadComponent: () => import('./leagues/leagues.page').then( m => m.LeaguesPage)
  },
  {
    path: 'leagues/:slug',
    loadComponent: () => import('./league/league.page').then( m => m.LeaguePage)
  },
  {
    path: 'pages',
    loadComponent: () => import('./pages/pages.page').then( m => m.PagesPage)
  },
  {
    path: 'pages/:slug',
    loadComponent: () => import('./page/page.page').then( m => m.PagePage)
  },
  {
    path: 'americano',
    loadComponent: () => import('./americano/americano.page').then( m => m.AmericanoPage)
  },
  {
    path: 'match/:id',
    loadComponent: () => import('./match/match.page').then( m => m.MatchPage)
  },

];
