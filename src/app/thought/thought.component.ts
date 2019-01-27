import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, PageEvent } from '@angular/material';
import { forkJoin } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';

import { BottomMessage, Page } from '../core';
import { AuthenticationService } from '../core/authentication.service';
import { ConfirmDeleteDialogComponent, Thought, ThoughtService } from './shared';

@Component({
  selector: 'pvt-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss']
})
export class ThoughtComponent implements OnInit {

  page = new Page<Thought>();
  secret: string;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(
    private readonly _authService: AuthenticationService,
    private readonly service: ThoughtService,
    private readonly bottomMessage: BottomMessage,
    private readonly _dialog: MatDialog
  ) { }

  ngOnInit() {

    const pageStream = this.service.getPage();
    const secretStream = this._authService.getSecretKey();
      forkJoin(pageStream, secretStream)
      .subscribe({
        next: ([page, secret]) => {
          this.page = page;
          this.secret = secret;
        },
        error: err => console.log(err)
      });

    }

    loadPage(page: PageEvent) {
      this.service.getPage({page: page.pageIndex, size: page.pageSize})
      .subscribe({
        next: pg => {
          this.page = pg;
        }
      });
    }

    remove(thought: Thought) {

      this._dialog.open(ConfirmDeleteDialogComponent)
        .afterClosed()
        .pipe(filter(confirm => !!confirm))
        .pipe(mergeMap(() => {
          return this.service.remove(thought);
        }))
      .subscribe({
        next: () => {
          this.bottomMessage.success('Excluído com sucesso!');
          this._refreshPage();
        },
        error: err => this.bottomMessage.error(err)
      });
    }

    private _refreshPage(): void {
      this.service.getPage({page: this.paginator.pageIndex, size: this.paginator.pageSize})
      .subscribe({
        next: pg => {
          this.page = pg;
        },
        error: err => this.bottomMessage.error(err)
      });
    }

}
