import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { from } from 'rxjs';

//http://api.github.com/akashpai11
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUserDetails(userName: string) {
    return this.http.get(`//api.github.com/users/${userName}`);
  }
  getRepos(repoUrl: string) {
    return this.http.get(repoUrl);
  }
}
