import { 
  Component,
  OnInit, 
  Input,
  Output,
  OnChanges,
  EventEmitter
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'

@Component({
  selector: 'app-angular-dialog',
  templateUrl: './angular-dialog.component.html',
  styleUrls: ['./angular-dialog.component.scss'],
  // animations: [
  //   trigger('dialog', [
  //     transition('void => *', [
  //       style({ transform: 'scale3d(.3, .3, .3)' }),
  //       animate(100)
  //     ]),
  //     transition('* => void', [
  //       animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
  //     ])
  //   ])
  // ]
  animations: [
    // trigger('slideInOut', [
    //   state('enter', style({
    //     transform: 'translateX(100%)'
    //   })),
    //   state('leave', style({
    //     transform: 'translateX(-100%)'
    //   })),
    //   transition('enter => leave', [
    //     animate('2s ease-in')
    //   ]),
    //   transition('leave => enter', [
    //     animate('2s ease-out')
    //   ])
      
    // ])
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('2s ease-in', style({transform: 'translateX(-100%)'}))
      ]),
      transition(':leave', [
        animate('2s ease-in', style({transform: 'translateX(0%)'}))
      ])
    ])
  ],
})
export class AngularDialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible!: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}