import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadingspinner',
  templateUrl: './loadingspinner.component.html',
  styleUrls: ['./loadingspinner.component.scss']
})
export class LoadingspinnerComponent implements OnInit {

  @Input() showSpinner: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

}
