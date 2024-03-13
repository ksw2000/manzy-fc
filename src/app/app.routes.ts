import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LiveComponent } from './live/live.component';

export const routes: Routes = [
    { path: 'events', component: EventsComponent },
    { path: 'live', component: LiveComponent },
    { path: '', component: HomeComponent },
];
