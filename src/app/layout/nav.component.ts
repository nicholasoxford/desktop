import { Component } from '@angular/core';
import { I18nService } from 'jslib-common/abstractions/i18n.service';

@Component({
    selector: 'app-nav',
    templateUrl: 'nav.component.html',
})
export class NavComponent {
    items: any[] = [
        {
            link: '/vault',
            icon: 'fa-lock',
            label: this.i18nService.translate('myVault'),
        },
        {
            link: '/vault',
            icon: 'fa-laptop',
            label: 'Remote Desktop',
        },
   
    ];

    constructor(private i18nService: I18nService) {}
}
