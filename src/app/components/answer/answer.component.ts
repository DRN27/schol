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
    public disabledButton: boolean = false;

	constructor(
        private appService: AppService
    ) {}

	ngOnInit(): void {}

	checkAnswer(userAnswer: string): void {
        if (this.disabledButton) {
            return
        }

        this.disabledButton = true;

		if (userAnswer === this.wordData.correct) {
            this.isRightAnswer = 'right';
			this.appService.rightAnswersList.push(this.wordData);
            this.startTimeout();
		} else {
            this.isRightAnswer = 'wrong';
			this.appService.wrongAnswersList.push(this.wordData);
            this.startTimeout();
        }
	}

    startTimeout(): void {
        setTimeout(() => {
            this.isRightAnswer = '';
            this.disabledButton = false;
            this.onRightAnswer.emit('next');
        }, 500);
    }
}
