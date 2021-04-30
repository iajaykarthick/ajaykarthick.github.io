import { Component } from "@angular/core";
import { HeaderService } from "../header.service";

@Component({
  selector: '<app-navbar>',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private headerService: HeaderService) {}

  goToTab(tabName: string) {
    this.headerService.openTab(tabName);
  }

}
