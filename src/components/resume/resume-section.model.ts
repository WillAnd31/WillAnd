import { WAResumeSectionItem } from './resume-section-item.model';

export interface WAResumeSectionOptions {
	largeItems?: boolean;
}

export class WAResumeSectionModel {

	public title: string;
	public items: WAResumeSectionItem[];
	public settings: WAResumeSectionOptions

	constructor(title: string, items: WAResumeSectionItem[], settings: WAResumeSectionOptions = {}) {
		this.title = title;
		this.items = items;
		this.settings = settings;
	}

}
