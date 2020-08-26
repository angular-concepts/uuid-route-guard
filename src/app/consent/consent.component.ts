import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 } from 'uuid'
import { Store } from '@ngxs/store'
import { CreateUUID, DeleteUUID } from '../actions/uuid.actions'
import { Observable } from 'rxjs';
import { UUID } from '../models/uuid.model'

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class ConsentComponent implements OnInit {

  uuid: UUID;

  constructor(private router: Router, private store: Store) {
  }

  ngOnInit(): void {
    this.getUUID().subscribe(uuid => this.uuid = uuid);
  }

  getUUID(): Observable<UUID> {
    return this.store.select(state => <UUID>state.gameStore.uuid)
  }


  acceptConsent() {
    this.store.dispatch(new CreateUUID(v4()))
  }

  unConsent() {
    this.store.dispatch(new DeleteUUID());
  }
}
