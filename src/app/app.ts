import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from "./components/footer/footer";
import { ButtonHire } from "./components/button-hire/button-hire";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ButtonHire],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('desafio_2');
}
