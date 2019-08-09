import { Component, OnInit } from '@angular/core';
import { Albums } from '../../data/albums';
import { Comments } from '../../data/comments';
import { Posts } from '../../data/posts';
import { Users } from '../../data/users';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  public albums: any[] = Albums;
  public comments: any[] = Comments;
  public posts: any[] = Posts;
  public users: any[] = Users;

  constructor() { }

  ngOnInit() {
  }

}
