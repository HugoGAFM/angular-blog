import { Component, Input } from '@angular/core';
import { RouterLink , RouterOutlet} from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-content',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  photoCover: string =""
  @Input()
  cardTitle: string= ""
  @Input()
  cardDescription: string=""

}
