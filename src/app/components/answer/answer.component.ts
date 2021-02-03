import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';
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

	constructor(
        private appService: AppService
    ) {}

	ngOnInit(): void {}

	checkAnswer(userAnswer: string): void {
		if (userAnswer === this.wordData.correct) {
			this.appService.rightAnswersList.push(this.wordData);
		} else {
			this.appService.wrongAnswersList.push(this.wordData);
        }
        this.onRightAnswer.emit('next');
	}
}
