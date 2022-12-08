import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  // comments$ = this.commentService.getComment();
  commentActiveRoute$ = this.activeRoute.data.pipe(
    map((data) => data['comments'])
  );

  constructor(
    private commentService: CommentService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //test with subscriber:
    // this.activeRoute.data.subscribe((data) => {
    //   console.log(data['comments']);
    // });
  }
}
