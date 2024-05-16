import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LiveComponent } from './live/live.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'events', component: EventsComponent, data: {animations: 'eventPage'} },
    { path: 'live', component: LiveComponent, data: {animations: 'livePage'} },
    { path: '', component: HomeComponent, data: {animations: 'homePage'} },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent, data: {animations: 'pageNotFoundPage'}}
];
