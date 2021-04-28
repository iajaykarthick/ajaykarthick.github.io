import { Component, OnInit } from "@angular/core";
import Typewriter from 't-writer.js'

@Component({
  selector: '<app-section1-main>',
  templateUrl: './section1.main.component.html',
  styleUrls: ['./section1.main.component.css']
})
export class Section1MainComponent implements OnInit {

  ngOnInit(): void {
    const target = document.querySelector('.exp-writer');
    const expWriter = new Typewriter(target, {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 100,
      typeColor: 'white',
      cursorColor: 'green'
    });

    expWriter
    .strings(
      400,
      "Angular",
      "Node.Js",
      "Python",
      "Java"
    )
    .start()
  }
}
