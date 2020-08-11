import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
  @Input() repoUrl: string;
  repos = [];

  constructor(
    private githubService: GithubService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.repoUrl) {
      return this.githubService.getRepos(this.repoUrl).subscribe(
        (repos: []) => {
          // the first repos is from above
          this.repos = repos;
          this.ref.detectChanges();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
