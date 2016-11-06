import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";

@Component({
  selector: 'lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.sass'],
  inputs: ['color']
})
export class LangComponent implements OnInit {
  private route: string;
  constructor(private commonService: CommonService) {
    this.route = window.location.pathname;
  }

  changeLang(lang: string){
    this.commonService.setLang(lang);
    this.route = window.location.pathname;
    window.location.replace(this.route);
  }

  ngOnInit() {
  }

}
