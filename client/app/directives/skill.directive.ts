import {
	Directive,
	ElementRef,
	Renderer,
	DebugElement,
	OnInit
} from '@angular/core';
import {Skill} from './../models/skill.model';

@Directive({
	selector: 'will-skill',
	inputs: [
		'skill: skill'
	]
})
export class SkillDirective implements OnInit {
	public imgContainer: Element;
	public skill: Skill;

	constructor (
		private elm: ElementRef,
		private render: Renderer
	) {}

	ngOnInit () {
		this.imgContainer = this.render.createElement(this.elm, 'div', null);
		this.imgContainer.className = 'img-container';
	}
}
