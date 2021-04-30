import { Component, OnInit } from "@angular/core";
import Typewriter from 't-writer.js'

@Component({
  selector: '<app-terminal>',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  commandsOutput=[
    { command: "whoami", output: "ajay_karthick"},
    { command: "pwd", output: "/home/ajay_karthick/resume"},
    { command: "ls", output: "academics work projects skills"}
  ];
  commandWriter: Typewriter;
  outputWriter: Typewriter;
  clearWriter: Typewriter;
  console_sign: "> " | "";
  index = 0;

  ngOnInit(): void {
    this.writeCommandOutput();
  }

  writeCommandOutput() {
    const target1 = document.querySelector('.command');
    const target2 = document.querySelector('.cmd-output');
    const target3 = document.querySelector('.clear-console');

    this.commandWriter = new Typewriter(target1, {
      typeSpeed: 250,
      animateCuror: false,
      loop: false,
      typeColor: '#d8e3e7',
      cursorColor: '#d8e3e7'
    });

    this.outputWriter = new Typewriter(target2, {
      typeSpeed: 0,
      loop: false,
      // typeColor: '#a6f0c6',
      typeColor: '#30e3ca',
      cursorColor: 'black'
    });

    this.clearWriter = new Typewriter(target3, {
      typeSpeed: 250,
      loop: false,
      typeColor: '#d8e3e7',
      cursorColor: '#d8e3e7'
    });

    this.commandWriter
      .type(this.getNextCommand())
      .rest(500)
      .removeCursor()
      .then(this.outputWriter.start.bind(this.outputWriter))
      .start()

    this.outputWriter
      .type(this.getNextOutput())
      .removeCursor()
      .rest(100)
      .then(() => {this.console_sign="> "; this.clearWriter.start()})

    this.clearWriter
      .rest(2000)
      .type("clear")
      .rest(500)
      .removeCursor()
      .then(() => {this.clear()})
  }

  getNextCommand() {
    return this.commandsOutput[this.index]["command"];
  }

  getNextOutput() {
    const output = this.commandsOutput[this.index]["output"];
    console.log(output, this.index)
    if (this.index == this.commandsOutput.length - 1) {
      this.index = 0;
    } else {
      this.index += 1;
    }
    return output;
  }

  clear() {
    this.outputWriter.clearText();
    this.commandWriter.clearText();
    this.clearWriter.clearText();
    this.outputWriter = null;
    this.commandWriter = null;
    this.clearWriter = null;
    this.console_sign = "";
    this.writeCommandOutput();
  }
}
