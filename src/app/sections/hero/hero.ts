import { Component } from '@angular/core';
import { Sprout, Users, Crosshair, Clock3, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly Sprout = Sprout;
  readonly Users = Users;
  readonly Crosshair = Crosshair;
  readonly Clock3 = Clock3;

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (!element) return;

    const navbarOffset = 90;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - navbarOffset;

    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 900;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease =
        progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }
}
