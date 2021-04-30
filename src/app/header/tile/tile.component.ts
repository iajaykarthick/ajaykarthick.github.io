import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { HeaderService } from "../header.service";

@Component({
  selector: '<app-tile>',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit, OnDestroy {

  tabs = {
    about: true,
    work: false,
    skills: false,
    projects: false
  }

  tabOpenListener: Subscription;

  previouslyVisitedTab: string;
  nextTab: string;

  objectKeys = Object.keys;

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.previouslyVisitedTab = null;
    this.nextTab = 'work';
    this.tabOpenListener = this.headerService.getOpenTabListener().subscribe(
      (tabName) => {
        console.log("Tab Open request received", tabName);
        this.goTo(tabName);
      }
    );
  }

  ngOnDestroy(): void {
    this.tabOpenListener.unsubscribe();
  }

  isActive(tabName: string): boolean {
    return true;
  }

  closeTab(tabName: string) {
    if (this.tabs[tabName]) {
      let found = false;
      let goToTab = '';
      this.objectKeys(this.tabs).forEach((tab) => {
        if (tab === tabName) {
          found = true
        }
        if (!found) {
          goToTab = tab;
        }
      })
      console.log("goToTab", goToTab)
      this.goTo(goToTab);
    }
    delete this.tabs[tabName];
  }

  goTo(tabName: string) {
    let flag = false;
    Object.keys(this.tabs).forEach((key, index, arr)=>{
      if (index == 0 && arr.length > 1) {
        this.nextTab = key;
      }
      if (index == 0 && arr.length === 1) {
        this.nextTab = 'start';
      }
      if (this.tabs[key]) {
        this.previouslyVisitedTab = key;
      }
      if (flag) {
        this.nextTab = key;
        flag = false;
      }
      if (key === tabName) {
        flag = true;
      } else {
        this.tabs[key] = false;
      }
     });
     this.tabs[tabName] = true;
  }

  getHref(tabName: string) {
    return `#${tabName}`
  }

  getId(tabName: string) {
    return `${tabName}-tab`
  }

}
