import _ from 'lodash'

import Vue from 'vue'
import Vuex from 'vuex'
import { StoreOptions } from 'vuex'

import { UserStore } from './user/user.store';
import { SkillsStore } from './skills/skills.store';
import { ExperiencesStore } from './experience/experiences.store';
import { EducationStore } from './education/education.store';

const stores: StoreOptions<any>[] = [
	UserStore,
	SkillsStore,
	ExperiencesStore,
	EducationStore
]

const merger = (getProp: (store: StoreOptions<any>) => any) => _.reduce(
	stores,
	(res, store) => _.merge(res, getProp(store)),
	{})

Vue.use(Vuex)
export default new Vuex.Store({
	state: merger(store => store.state),
	getters: merger(store => store.getters),
	mutations: merger(store => store.mutations),
	actions: merger(store => store.actions)
})
