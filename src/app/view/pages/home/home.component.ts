import { Component, OnInit } from '@angular/core';
import { MOCKANIMELIST } from 'src/app/constants/mock-anime-list';
import { ThemesAnime } from 'src/app/interface/anime-themes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mockList:Array<ThemesAnime>
  constructor() { 
    this.mockList = MOCKANIMELIST;
  }
}
