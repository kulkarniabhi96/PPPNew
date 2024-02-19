import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
}
