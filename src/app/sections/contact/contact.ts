import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  gdprAccepted = false;

  constructor(private http: HttpClient) {}

  sendEmail(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      gdpr: this.gdprAccepted,
    };

    this.http.post('/send-mail.php', payload).subscribe({
      next: () => {
        alert('Köszönjük! Az ajánlatkérés sikeresen elküldve.');
        form.reset();
        this.gdprAccepted = false;
      },
      error: () => {
        alert('Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.');
      },
    });
  }
}
