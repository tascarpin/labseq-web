import { Component } from '@angular/core';
import { LabseqService } from '../../services/labseq.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-labseq',
  templateUrl: './labseq.component.html',
  imports: [
    FormsModule,
    NgIf
  ]
})
export class LabseqComponent {
  inputValue: number = 0;
  result: string | null = null;
  loading = false;
  error: string | null = null;

  constructor(private labseqService: LabseqService) {}

  onSubmit(): void {
    this.loading = true;
    this.result = null;
    this.error = null;

    this.labseqService.calculate(this.inputValue).subscribe({
      next: (res) => {
        this.result = `F(${res.n}) = ${res.result}`;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = err.error?.error || err.message || 'Unexpected error';
        this.loading = false;
      }
    });
  }
}
