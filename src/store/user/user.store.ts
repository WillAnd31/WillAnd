import { StoreOptions } from 'vuex'

import { WAUser } from './user.model';

export interface UserStoreState {
	user: WAUser
}

export const UserStore: StoreOptions<UserStoreState> = {
	state: { user: new WAUser() }
}