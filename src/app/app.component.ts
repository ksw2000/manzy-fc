import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet, RouterModule } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [slideInAnimation],
})

export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animations'];
  }
}