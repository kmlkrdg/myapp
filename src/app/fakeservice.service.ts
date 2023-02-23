import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Postshort } from './models/postshort';
import { from, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeserviceService {
  constructor(private httpClient:HttpClient) { }

  getPostsGood()
{
  let UserId = 1;
  const params= new HttpParams().set ('userId',1)
  .set('userId',1)
  .set('abc','abc');
  return this.httpClient.get<Postshort[]>(`https://jsonplaceholder.typicode.com/posts?`,{params}).pipe(switchMap(x=> from(x)),map(x=>`${x.id}-${x.title}`));
}

// getPosts()
// {
//   return this.httpClient.get<Postshort[]>("https://jsonplaceholder.typicode.com/posts?userId=$").pipe(switchMap(x=> from(x)),map(x=>`${x.id}-${x.title}`));
// }
}
