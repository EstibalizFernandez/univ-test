import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'universia';

  public users;
  public albums;
  public comments;
  public posts;

  state;
  constructor() {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => this.users = response.json())
    .then(json => console.log('USERS', this.users));

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => this.albums = response.json())
    .then(json => console.log('ALBUMS', this.albums));

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => this.comments = response.json())
    .then(json => console.log('COMMENTS', this.comments));

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => this.posts = response.json())
    .then(json => console.log('POST', this.posts));

  }

}

