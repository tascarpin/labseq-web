import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FibonacciResponse {
  n: number;
  result: string;
}

@Injectable({
  providedIn: 'root'
})
export class LabseqService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  calculate(n: number): Observable<FibonacciResponse> {
    return this.http.get<FibonacciResponse>(`${this.baseUrl}/labseq/${n}`);
  }
}
