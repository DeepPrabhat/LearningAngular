import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() item:string=''; //the value for item comes from the parent component.

  @Output() newItemEvent=new EventEmitter<string>();
  // for output make a EventEmitter and then define a function
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
