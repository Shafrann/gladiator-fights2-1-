import { Component , Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  
  @Input() isShowingResult:boolean=false;
  @Output() onResultClick = new EventEmitter<void>();

  handleResultClick() {
    this.onResultClick.emit();
    
  }
}
