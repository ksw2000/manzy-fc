import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LiveComponent } from './live/live.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'events', component: EventsComponent },
    { path: 'live', component: LiveComponent },
    { path: '', component: HomeComponent },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];
