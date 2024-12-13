import { Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './page-content/home/home.component';
import { AboutComponent } from './page-content/about/about.component';
import { PageNotFoundComponent } from './page-content/page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from './page-content/privacy-policy/privacy-policy.component';
import { InternetOfThingsComponent } from './page-content/internet-of-things/internet-of-things.component';
import { EncryptionLabComponent } from './page-content/encryption-lab/encryption-lab.component';
import { AugmentedRealityLabComponent } from './page-content/augmented-reality-lab/augmented-reality-lab.component';
import { ArtificialIntelligenceLabComponent } from './page-content/artificial-intelligence-lab/artificial-intelligence-lab.component';
import { GovernmentDefenseComponent } from './page-content/government-defense/government-defense.component';
import { BlogsComponent } from './page-content/blogs/blogs.component';
import { BlogDetailComponent } from './page-content/blog-detail/blog-detail.component';
import { EmergencyManagementPage } from './page-content/emergencyManagement-page/emergencyManagement.component';
import { LogisticsPageComponent } from './page-content/logistics-page/logistics-page.component';
import { HealthcareComponent } from  './page-content/healthcare/healthcare.component';
import { TertiaOptioComponent } from  './page-content/tertia-optio/tertia-optio.component';
import { NOMADComponent } from  './page-content/nomad/nomad.component';
import { LoginComponent } from './page-content/login-out/login.component';
import { xSuiteAdminComponent } from './page-content/xSuite/admin/admin.component';
import { xSuiteStdLoginComponent } from './page-content/xSuite/standard/std.component';
/*
Author: David A. Ruiz
Coded and Created on March 5, 2024
Summary: This file tells angular it's routing logic after <router-outlet /> is called in app.component.html.
This is how Angular does single-page app functionality. We use matcher instead of the path property because
we want the user to be able to navigate to case-insensitve url routes for the app.
*/

export const routes: Routes = [
    /* Add other paths and page components here. Static routes are listed first, followed by an empty route (''), followed by the wildcard route (**). */
    { matcher: (url) => {
        return matchPage('home', url);
    }, component: HomeComponent},
    { matcher: (url) => {
        return matchPage('about', url);
    }, component: AboutComponent},
    { matcher: (url) => {
        return matchPage('privacy-policy', url);
    }, component: PrivacyPolicyComponent},
    { matcher: (url) => {
        return matchPage('internet-of-things', url);
    }, component: InternetOfThingsComponent},
    { matcher: (url) => {
        return matchPage('encryption-lab', url);
    }, component: EncryptionLabComponent},
    { matcher: (url) => {
        return matchPage('augmented-reality-lab', url);
    }, component: AugmentedRealityLabComponent},
    { matcher: (url) => {
        return matchPage('artificial-intelligence-lab', url);
    }, component: ArtificialIntelligenceLabComponent},
    { matcher: (url) => {
        return matchPage('emergency-management', url);
    }, component: EmergencyManagementPage},
    { matcher: (url) => {
        return matchPage('government-defense', url);
    }, component: GovernmentDefenseComponent},  
    { matcher: (url) => {
        return matchPage('blogs', url);
    }, component: BlogsComponent},
    { matcher: (url) => { 
        return matchPage('blog_detail', url);
    }, component: BlogDetailComponent },
    { matcher: (url) => {
        return matchPage('logistics-software-solutions', url);
    }, component: LogisticsPageComponent},
    { matcher: (url) => {
        return matchPage('tertia-optio', url);
    }, component: TertiaOptioComponent},
    { matcher: (url) => {
        return matchPage('healthcare', url);
    }, component: HealthcareComponent},
    { matcher: (url) => {
        return matchPage('nomad', url);
     }, component: NOMADComponent},
     { matcher: (url) => {
        return matchPage('login', url);
     }, component: LoginComponent},
     { matcher: (url) => {
        return matchPage('xsuites', url);
     }, component: xSuiteStdLoginComponent},
     { matcher: (url) => {
        return matchPage('xsuites-adm', url);
     }, component: xSuiteAdminComponent},
     
    {path: '', component: HomeComponent},
    {path: '**', component: PageNotFoundComponent},
];


export function matchPage(page: string, url: UrlSegment[]) {     
    /* Checks if there is a user-entered url path and checks if that url path starts with the correct page name parameter. 
       The comparison made is case-insensitive between the url and page variables. Returns a UrlMatchResult or null. */
    return url.length === 1 && url[0].path.toLowerCase().startsWith(page.toLowerCase()) ? {consumed: url} : null;
}
