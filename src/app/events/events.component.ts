import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import * as events from '../../assets/events.json';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})

export class EventsComponent {
  data: {
    title: string
    year: number
    month: number
    day: number
    place: string
    images: string[]
    links: {
      href: string
      text: string
    }[];
  }[] = [
      {
        title: "FF42 Day3",
        year: 2024,
        month: 2,
        day: 25,
        place: "台北花博爭艷館",
        images: ["assets/events/20240207.jpg"],
        links: [{
          href: "https://www.facebook.com/photo?fbid=782585030559348&set=a.414922283992293",
          text: "Facebook活動預告"
        }]
      }, {
        title: "Manzy 1st Online Mini Live",
        year: 2024,
        month: 2,
        day: 7,
        place: "Instagram Live",
        images: [],
        links: [{
          href: "https://www.facebook.com/photo?fbid=767118478772670&set=a.414922283992293",
          text: "Facebook活動預告"
        }]
      }, {
        title: "FF41 Day3",
        year: 2023,
        month: 8,
        day: 20,
        place: "台北花博爭艷館",
        images: ["assets/events/20230820.jpg"],
        links: [{
          href: "https://www.facebook.com/photo/?fbid=672051748279344&set=a.414922283992293",
          text: "Facebook活動情報"
        }]
      }, {
        title: "Manzy 生誕祭",
        year: 2023,
        month: 6,
        day: 10,
        place: "藝秀設計影像工作室",
        images: ["assets/events/20230613.jpg"],
        links: [{
          href: "https://www.facebook.com/permalink.php?story_fbid=pfbid02taFv9vnXbDjSRGqty9NBQMgRTgtwFCpqQ2yUu2LhGeuE2EkMLMcMEBBvJ4FNR21Sl&id=100064235731491",
          text: "Facebook活動情報"
        }]
      }
    ]
}
