import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
// import {Question} from '../models/question';
import {User} from '../models/user';

@Injectable()
export class AdminService {

  constructor(private api: ApiService) {
  }

  student(): Observable<User[]> {//
    return this.api.get<any>('/student/login').pipe(map(res => res.data));
  }

  // faculty(): Observable<User[]> {//
  //   return this.api.get<any>('/faculty').pipe(map(res => res.data));
  // }

  createCandidate(data: {
    name: string,
    student_number: number,
    email: string,
    phone_number: number,
    branch: string,
    gender: string,
    hosteler: boolean
  }): Observable<User> {//
    return this.api.post('/candidates', data);
  }

  createNotice(data: {
                   type: string,
                   notice: string,
                  //  options: { title: string, is_correct: boolean }[]
                 }): Observable<any> {
    return this.api.post('/questions', data);
  }
}
