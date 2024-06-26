export type SPContext = {
    aadSessionId: string;
    aadTenantId: string;
    aadUserId: string;
    channelGroupId: string;
    departmentId: string;
    isHubSite: boolean;
    isSiteAdmin: boolean;
    isSiteOwner: boolean;
    relatedHubSiteId: string;
    serverTime: string;
    siteAbsoluteUrl: string;
    siteServerRelativeUrl: string;
    siteSubscriptionId: string;
    siteClassification: string;
    userDisplayName: string;
    userEmail: string;
    userId: number;
    userLoginName: string;
    userPrincipalName: string;
    userPhotoCdnBaseUrl: string;
    webAbsoluteUrl: string;
    webDescription: string;
    webId: string;
    webLanguage: number;
    webLanguageName: string;
    webLogoUrl: string;
    webServerRelativeUrl: string;
    webTitle: string;
}