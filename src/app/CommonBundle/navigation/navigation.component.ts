import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  private route: string;

  constructor(private commonService: CommonService) { }

  logaut(){
    this.commonService.logout();
  }

  ngOnInit() {
    this.route = window.location.pathname;
  }

}
