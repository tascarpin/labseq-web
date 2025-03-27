import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LabseqResponse {
  n: number;
  result: string;
}

@Injectable({
  providedIn: 'root'
})
export class LabseqService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  calculate(n: number): Observable<LabseqResponse> {
    return this.http.get<LabseqResponse>(`${this.baseUrl}/labseq/${n}`);
  }
}
