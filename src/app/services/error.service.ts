import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { ErrorComponent } from '../components/error/error.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay) { }

  showError(message?: string) {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    const spinnerOverlayPortal = new ComponentPortal(ErrorComponent);
    const component = this.overlayRef.attach<ErrorComponent>(spinnerOverlayPortal);
    component.instance.msg = message
  }

  hideError() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
