import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthStore } from '../auth-store.service';

@Directive({
  selector: '[appIfAuth]'
})
export class IfAuthDirective {
    subscription: Subscription | undefined = undefined;
    @Input('appIfAuth') show: boolean = false;

    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef, private auth: AuthStore) {
    }

    ngOnInit() {
        this.subscription = this.auth.authStateChanges$.distinct().subscribe(isLoggedIn => {
            if (isLoggedIn) {
                if (this.show) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                } else {
                    this.viewContainer.clear();
                }
            } else {
                if (this.show) {
                    this.viewContainer.clear();
                } else {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            }
        });
    }

    ngOnDestroy() {
        if(!this.subscription) return;
        this.subscription.unsubscribe();
    }

}
