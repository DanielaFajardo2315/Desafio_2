import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  openFullscreen(event: MouseEvent) {
    const video = event.target as HTMLVideoElement;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }
}
