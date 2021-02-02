import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Word } from 'src/app/shared/data';

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

    @Input() answerValue: string;
    @Input() wordData: Word;
    @Output() onRightAnswer: EventEmitter<string> = new EventEmitter();
    public isRightAnswer: string = '';

	constructor() {}

	ngOnInit(): void {}

	checkAnswer(userAnswer: string): void {
		if (userAnswer === this.wordData.correct) {
			this.isRightAnswer = 'yes';
			this.resetAnswerColor();
			setTimeout(() => {
				this.onRightAnswer.emit('right');
			}, 500);
		} else {
			this.isRightAnswer = 'no';
			this.resetAnswerColor();
		}
	}

	resetAnswerColor(): void {
		setTimeout(() => {
			this.isRightAnswer = '';
		}, 500);
	}
}
