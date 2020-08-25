import { UUID } from '../models/uuid.model';
import { State, Action, StateContext, Selector } from '@ngxs/store'
import { Injectable } from '@angular/core';
import { CreateUUID, DeleteUUID } from '../actions/uuid.actions';

export class StoreStateModel {
    uuid: UUID
}

@State<StoreStateModel>({
    name: 'gameStore',
    defaults: {
        uuid: ''
    }
})
@Injectable()
export class StoreState {
    @Selector()
    static getUUID(state: StoreStateModel) {
        return state.uuid;
    }

    @Action(CreateUUID)
    add({ patchState }: StateContext<StoreStateModel>, { payload }: CreateUUID) {
        patchState({
            uuid: payload
        })
    }

    @Action(DeleteUUID)
    remove({ patchState }: StateContext<StoreStateModel>) {
        patchState({
            uuid: ''
        })
    }

}