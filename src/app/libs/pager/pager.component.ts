import { OnInit, Output, EventEmitter, Input, Component } from '@angular/core';

@Component({
    selector: 'app-pager',
    templateUrl: './pager.component.html',
    styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

    @Input() title: string = "";

    @Output() previous = new EventEmitter();

    @Output() next = new EventEmitter();

    // @HostListener()
    previousPage() {
        this.previous.emit();
    }

    // @HostListener()
    nextPage() {
        this.next.emit();
    }

    constructor() {
    }

    ngOnInit() {
    }
}
