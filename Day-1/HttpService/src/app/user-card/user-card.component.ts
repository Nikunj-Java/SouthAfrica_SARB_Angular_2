import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

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

  counter =0;
  oldName:string='';

  constructor(){
    console.log('[Constructor] component instance Created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[ngOnChanges] input changed:',changes);
    if(changes['name']){
      const previous= changes['name'].previousValue;
      const current=changes['name'].currentValue;
      console.log(`Name Changed From "${previous}"  to "${current}"`);
    }
  }


   ngOnInit(): void {
    console.log('[ngOnInit] Initialization logic here');
    this.intervalId= setInterval(()=>{
      console.log('[Interval] simulating background works...')
    },2000);

    //start background task
    this.intervalId=setInterval(()=>{
      this.counter++;
      console.log(`[Interval] Counter:${this.counter}`);
    })
  }
  
  ngAfterViewChecked(): void {
   // console.log('[ngAfterViewChecked] content Checked!')
  }
  ngAfterViewInit(): void {
    //console.log('[ngAfterViewInit] View initilized!')
  }
  ngAfterContentChecked(): void {
    //console.log('[ngAfterContentChecked] View checked!')
  }
  ngAfterContentInit(): void {
   // console.log('[ngAfterContentInit]View Initialized!')
  }

  ngDoCheck(): void {
    //console.log('[ngDoCheck]Custom change detection logic running!')
    if(this.oldName !== this.name){
      console.log(`[ngDoCheck] Detected Name Chnage Via custom Logic: ${this.oldName} --> ${this.name}`);
      this.oldName=this.name;
    }
  }
 
  ngOnDestroy(): void {
     console.log('[ngOnDestroy]component being destroyed!')
     clearInterval(this.intervalId);
     
  }

  
  

}
