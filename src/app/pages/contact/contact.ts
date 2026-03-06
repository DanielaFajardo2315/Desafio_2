import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ContactService, ContactForm } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(
    protected ts: TranslationService,
    private contactService: ContactService,
  ) {}

  loading = false;
  success = false;
  error = '';

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const data: ContactForm = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('number') as HTMLInputElement).value,
      email: (form.elements.namedItem('mail') as HTMLInputElement).value,
      message: (form.elements.namedItem('text') as HTMLInputElement).value,
    };

    this.loading = true;
    this.success = false;
    this.error = '';

    this.contactService.sendContact(data).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        form.reset();
      },
      error: () => {
        this.loading = false;
        this.error = 'Hubo un error al enviar el mensaje. Intenta nuevamente.';
      },
    });
  }
}
