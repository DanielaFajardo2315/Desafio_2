import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-button-hire',
  imports: [RouterLink],
  templateUrl: './button-hire.html',
  styleUrl: './button-hire.css',
})
export class ButtonHire {
  constructor(protected ts: TranslationService) {}
}
