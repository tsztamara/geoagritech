import { Component } from '@angular/core';
import { Satellite, Radar, Sprout, ChartColumn, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-technology',
  imports: [LucideAngularModule],
  templateUrl: './technology.html',
  styleUrl: './technology.scss',
})
export class Technology {
  readonly Satellite = Satellite;
  readonly Radar = Radar;
  readonly Sprout = Sprout;
  readonly ChartColumn = ChartColumn;
}
