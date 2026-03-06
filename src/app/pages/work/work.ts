import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  constructor(protected ts: TranslationService) {}

  openFullscreen(event: MouseEvent) {
    const video = event.target as HTMLVideoElement;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }
}
