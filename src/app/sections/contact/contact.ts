import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  gdprAccepted = false;

  sendEmail(event: Event): void {
    event.preventDefault();

    alert('Köszönjük megkeresését! Hamarosan jelentkezünk.');

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const subject = 'Árajánlatkérés';

    const body = `Név: ${name}

Email: ${email}

Telefonszám: ${phone}

Üzenet:
${message}`;

    window.location.href = `mailto:tszabados9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
