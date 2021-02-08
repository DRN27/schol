import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})
export class TestResultComponent implements OnInit, OnDestroy {

    constructor(
        public appService: AppService,
        private router: Router
    ) { }

    ngOnInit(): void {}

    repeatMistakes(): void {
        this.appService.workOnMistakes = true;
        this.appService.selectedVariant.words = this.appService.wrongAnswersList;
        this.router.navigateByUrl('/variant');
    }

    navigateToMenu(): void {
        this.appService.workOnMistakes = false;;
        this.router.navigateByUrl('/menu');
    }

    ngOnDestroy(): void {
        this.appService.rightAnswersList = [];
        this.appService.wrongAnswersList = [];
    }
}
