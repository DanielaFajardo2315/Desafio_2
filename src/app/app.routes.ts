import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Languages } from './pages/languages/languages';
import { Work } from './pages/work/work';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home, title: 'Inicio' },
    { path: 'about', component: About, title: 'Sobre mi' },
    { path: 'contact', component: Contact, title: 'Contacto' },
    { path: 'languages', component: Languages, title: 'Lenguajes de programación' },
    { path: 'projects', component: Work, title: 'Proyectos' },
    { path: '**', component: NotFound, title: 'Página no encontrada' },
];
