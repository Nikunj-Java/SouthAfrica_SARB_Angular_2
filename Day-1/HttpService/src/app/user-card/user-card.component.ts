import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements 
OnChanges,OnInit,DoCheck,
AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy
{

  @Input() name:string='';
  private intervalId:any;

  constructor(){
    console.log('[Constructor] component instance Created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[ngOnChanges] input changed:',changes);
  }


   ngOnInit(): void {
    console.log('[ngOnInit] Initialization logic here');
    this.intervalId= setInterval(()=>{
      console.log('[Interval] simulating background works...')
    },2000);
  }
  
  ngAfterViewChecked(): void {
    console.log('[ngAfterViewChecked] content Checked!')
  }
  ngAfterViewInit(): void {
    console.log('[ngAfterViewInit] View initilized!')
  }
  ngAfterContentChecked(): void {
    console.log('[ngAfterContentChecked] View checked!')
  }
  ngAfterContentInit(): void {
    console.log('[ngAfterContentInit]View Initialized!')
  }
  ngDoCheck(): void {
    console.log('[ngDoCheck]Custom change detection logic running!')
  }
 
  ngOnDestroy(): void {
     console.log('[ngOnDestroy]component being destroyed!')
     clearInterval(this.intervalId);
  }

  
  

}
