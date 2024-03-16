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
        title: "FF42 Day3 場外表演",
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
        title: "FF41 Day3 場外表演",
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
      }, {
        title: "PF38 Day1 場外表演",
        year: 2023,
        month: 4,
        day: 29,
        place: "國立臺灣大學綜合體育館",
        images: ["assets/events/20230429.jpg"],
        links: [{
          href: "https://www.facebook.com/permalink.php?story_fbid=pfbid02sjfEEyZvJhMhZQgjhQDj6BbC45XUmimwA3hMscZSZ7qCdTJKi7TgwzYA3yP9mUuNl&id=100064235731491",
          text: "Facebook活動情報"
        }]
      }, {
        title: "FF40 Day1 場外表演",
        year: 2023,
        month: 2,
        day: 4,
        place: "台北花博爭艷館",
        images: ["assets/events/20230204-1.jpg", "assets/events/20230204-2.jpg"],
        links: [{
          href: "https://www.facebook.com/photo/?fbid=564932942324559&set=a.414922283992293",
          text: "Facebook活動情報"
        }]
      }, {
        title: "CWT63 Day2 場外表演",
        year: 2023,
        month: 1,
        day: 29,
        place: "國立臺灣大學綜合體育館",
        images: ["assets/events/20230129.jpg"],
        links: [{
          href: "https://www.facebook.com/photo/?fbid=555167986634388&set=a.414922283992293",
          text: "Facebook活動情報"
        }]
      }, {
        title: "PF37 Day1 場外表演",
        year: 2022,
        month: 10,
        day: 15,
        place: "台北花博爭艷館",
        images: ["assets/events/20221015-1.jpg", "assets/events/20221015-2.jpg"],
        links: [{
          href: "https://www.facebook.com/watch/?v=821535802598772&ref=sharing",
          text: "Facebook活動情報(倒數1天)"
        }, {
          href: "https://www.facebook.com/photo/?fbid=481408464010341&set=a.414922283992293",
          text: "Facebook活動情報(倒數2天)"
        }, {
          href: "https://www.facebook.com/permalink.php?story_fbid=pfbid0hEhqktRfK2dskyyoGQt1YuEuHyznzgDcd8aa9VPTBiWQT6D9FkadUZ3oRsdxgDfSl&id=100064235731491",
          text: "Facebook活動情報(倒數4天)"
        }]
      }, {
        title: "FF39 Day1 & Day2 場外表演",
        year: 2022,
        month: 7,
        day: 16,
        place: "台北花博爭艷館",
        images: [],
        links: [{
          href: "https://fb.watch/qNuX3lWvBf/",
          text: "FF39回顧影片(Facebook)"
        }, {
          href: "https://www.facebook.com/photo/?fbid=415011993983322&set=a.414922283992293",
          text: "Facebook活動情報"
        }]
      }, {
        title: "FF38 Cosplay 出場",
        year: 2022,
        month: 2,
        day: 12,
        place: "台北花博爭艷館",
        images: ["assets/events/20220212-1.jpg", "assets/events/20220212-2.jpg"],
        links: [{
          href: "https://www.facebook.com/permalink.php?story_fbid=pfbid0Y5HiTwXRhkd5j8hXbpPdWuabsfjU51TCfYgoGDiKDyPGq6MHQypFv2VBUJCosFoGl&id=111190647450339",
          text: "FF38心得文"
        }]
      }
    ]
}
