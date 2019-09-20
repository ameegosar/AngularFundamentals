import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `
    <events-list></events-list>
  `
   //path is relative to index.html file
  //angular json has assets array
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
