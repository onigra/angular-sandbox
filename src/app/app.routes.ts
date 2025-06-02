import { Routes } from '@angular/router';
import { UrlLinkConverterComponent } from './url-link-converter/url-link-converter.component';

export const routes: Routes = [
    {
        path: 'url-converter',
        component: UrlLinkConverterComponent
    },
    {
        path: '',
        redirectTo: 'url-converter',
        pathMatch: 'full'
    }
];
