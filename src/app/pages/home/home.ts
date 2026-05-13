import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../sections/hero/hero';
import { Services } from '../../sections/services/services';
import { Contact } from '../../sections/contact/contact';
import { About } from '../../sections/about/about';
import { Technology } from '../../sections/technology/technology';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Services, About, Contact, Technology, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
