import {Component} from "@angular/core";
import {AuthService} from "../Services/AuthService";
import {NotificationBannerService} from "../Services/NotificationBannerService";
import {LaunchDataService} from "../Services/LaunchDataService";
import {AppDataService} from "../Services/AppDataService";

@Component({
    selector:'body',
    template: `
        <tmt-notification-banner></tmt-notification-banner>
        <router-outlet></router-outlet>
        <div id="modal-backdrop" *ngIf="appData.isSettingsVisible" (click)="closeSettings()"></div>
    `
})
/**
 * @class
 * Global application component. Instantiate authService here to ensure the same instance is globally available across
 * all child components. Also holds the notification banner to display app wide information. The app data service allows the persisting and sharing of global application state (is the settings component visible, livestream local storage settings, etc)
 */
export class TMinusTenComponent {

    /**
     * Construct globally available services.
     *
     * @param authData
     * @param notificationBannerService
     * @param launchData
     * @param appData
     */
    constructor(
        public authData: AuthService,
        public notificationBannerService: NotificationBannerService,
        public launchData: LaunchDataService,
        public appData: AppDataService) {}

    /**
     * Closes the settings pane if the app is active.
     *
     * Used as an onclick method for the modal backdrop, which appears when the settings pane is open.
     */
    public closeSettings() : void {
        if (this.appData.isActive) {
            this.appData.isSettingsVisible = false;
        }
    }
}