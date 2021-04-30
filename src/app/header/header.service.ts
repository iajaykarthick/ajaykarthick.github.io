import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private openTabSub = new Subject<string>();


  getOpenTabListener() {
    return this.openTabSub.asObservable();
  }

  openTab(tabName: string) {
    this.openTabSub.next(tabName);
  }

}
