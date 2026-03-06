import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslationService, Language } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected ts: TranslationService;
  isDropdownOpen = false; // 👈 empieza cerrado

  constructor(private el: ElementRef, translationService: TranslationService) {
    this.ts = translationService;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  changeLanguage(lang: Language) {
    this.ts.setLanguage(lang);
    this.isDropdownOpen = false; // 👈 cierra al seleccionar idioma
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const navbar = this.el.nativeElement.querySelector('#navbarSupportedContent');
    const toggler = this.el.nativeElement.querySelector('.navbar-toggler');
    const clickedInside = this.el.nativeElement.contains(event.target);

    // Cierra el dropdown si se hace click fuera del navbar
    if (!clickedInside) {
      this.isDropdownOpen = false;
    }

    // Cierra el menú móvil si se hace click fuera
    if (!clickedInside && navbar?.classList.contains('show')) {
      toggler?.click();
    }

    // Cierra el menú móvil si se hace click en un link
    const clickedLink = (event.target as HTMLElement).closest('.nav-link:not([role="button"])');
    if (clickedLink && navbar?.classList.contains('show')) {
      toggler?.click();
    }
  }
}