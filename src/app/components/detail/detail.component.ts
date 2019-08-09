import { Component, OnInit } from '@angular/core';
import { Albums } from '../../data/albums';
import { Comments } from '../../data/comments';
import { Posts } from '../../data/posts';
import { Users } from '../../data/users';
import { ActivatedRoute } from '@angular/router';
import { HashLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public albumsList: any[] = Albums;
  public commentsList: any[] = Comments;
  public postsList: any[] = Posts;
  public usersList: any[] = Users;

  private userId: number;
  public user;
  public albums: any[] = [];
  public comments: any[] = [];
  public posts: any[] = [];

  constructor(
    private _activeRoute: ActivatedRoute,
  ) {
    this.userId = Number(this. _activeRoute.snapshot.paramMap.get('id'));
    this.user = this.usersList.filter( user => user.id === this.userId)[0];
    this.comments = this.commentsList.filter( comment => comment.email === this.user.email);
    this.posts = this.postsList.filter( post => post.userId === this.user.id);
    this.albums = this.postsList.filter( album => album.userId === this.user.id);
   }

  ngOnInit() {
  }

}
