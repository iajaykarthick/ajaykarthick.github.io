import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { Section1MainComponent } from './header/section1-main/section1.main.component';
import { TerminalComponent } from './header/terminal/terminal.component';
import { TileComponent } from './header/tile/tile.component';
import { AboutComponent } from './header/about/about.component';
import { WorkComponent } from './header/work/work.component';
import { SkillsComponent } from './header/skills/skills.component';
import { ProjectsComponent } from './header/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    Section1MainComponent,
    TerminalComponent,
    TileComponent,
    AboutComponent,
    WorkComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
