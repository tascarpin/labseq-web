import { Component } from '@angular/core';
import { LabseqComponent } from './components/labseq/labseq.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LabseqComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'labseq-web';
}
