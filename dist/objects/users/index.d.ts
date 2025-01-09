export declare const users: {
    get: (userId: string, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | {
        id?: string;
        name?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        extension?: string;
        permissions?: {
            campaignsEnabled?: boolean;
            campaignsReadOnly?: boolean;
            contactsEnabled?: boolean;
            workflowsEnabled?: boolean;
            workflowsReadOnly?: boolean;
            triggersEnabled?: boolean;
            funnelsEnabled?: boolean;
            websitesEnabled?: boolean;
            opportunitiesEnabled?: boolean;
            dashboardStatsEnabled?: boolean;
            bulkRequestsEnabled?: boolean;
            appointmentsEnabled?: boolean;
            reviewsEnabled?: boolean;
            onlineListingsEnabled?: boolean;
            phoneCallEnabled?: boolean;
            conversationsEnabled?: boolean;
            assignedDataOnly?: boolean;
            adwordsReportingEnabled?: boolean;
            membershipEnabled?: boolean;
            facebookAdsReportingEnabled?: boolean;
            attributionsReportingEnabled?: boolean;
            settingsEnabled?: boolean;
            tagsEnabled?: boolean;
            leadValueEnabled?: boolean;
            marketingEnabled?: boolean;
            agentReportingEnabled?: boolean;
            botService?: boolean;
            socialPlanner?: boolean;
            bloggingEnabled?: boolean;
            invoiceEnabled?: boolean;
            affiliateManagerEnabled?: boolean;
            contentAiEnabled?: boolean;
            refundsEnabled?: boolean;
            recordPaymentEnabled?: boolean;
            cancelSubscriptionEnabled?: boolean;
            paymentsEnabled?: boolean;
            communitiesEnabled?: boolean;
            exportPaymentsEnabled?: boolean;
        };
        scopes?: "calendars/events.readonly" | "calendars/events.write" | "campaigns.readonly" | "contacts.write" | "conversations.readonly" | "conversations.write" | "conversations/message.readonly" | "conversations/message.write" | "invoices.readonly" | "invoices.write" | "invoices/schedule.readonly" | "invoices/schedule.write" | "invoices/template.readonly" | "invoices/template.write" | "locations/tags.readonly" | "locations/tags.write" | "medias.readonly" | "medias.write" | "opportunities.write" | "socialplanner/post.write" | "workflows.readonly" | "campaigns.write" | "contacts/bulkActions.write" | "workflows.write" | "triggers.write" | "funnels.write" | "websites.write" | "opportunities/leadValue.readonly" | "reporting/phone.readonly" | "reporting/adwords.readonly" | "reporting/facebookAds.readonly" | "reporting/attributions.readonly" | "reporting/agent.write" | "reporting/agent.readonly" | "reporting/reports.write" | "reporting/reports.readonly" | "payments.write" | "payments/refunds.write" | "payments/records.write" | "payments/exports.write" | "payments/subscriptionsCancel.write" | "reputation/review.write" | "reputation/listing.write" | "contentAI.write" | "dashboard/stats.readonly" | "marketing.write" | "eliza.write" | "settings.write" | "marketing/affiliate.write" | "blogs.write" | "membership.write" | "communities.write" | "certificates.write" | "certificates.readonly" | "adPublishing.write" | "adPublishing.readonly" | "private-integration-location.readonly" | "private-integration-location.write" | "private-integration-company.readonly" | "private-integration-company.write" | "native-integrations.readonly" | "native-integrations.write" | "wordpress.write" | "wordpress.read" | "custom-menu-link.readonly" | "custom-menu-link.write";
        roles?: {
            type?: "account" | "agency";
            role?: "admin" | "user";
            locationIds?: string[];
            restrictSubAccount?: boolean;
        };
        deleted?: boolean;
    }) | null>;
    search: (options: import("../../types/users").UsersSearchOptions, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/users").UsersSearchResponseDTO) | null>;
    listByLocation: (companyId: string, locationId: string, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/users").UsersGetResponseDTO) | null>;
    create: (options: import("../../types/users").UsersCreateDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | {
        id?: string;
        name?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        extension?: string;
        permissions?: {
            campaignsEnabled?: boolean;
            campaignsReadOnly?: boolean;
            contactsEnabled?: boolean;
            workflowsEnabled?: boolean;
            workflowsReadOnly?: boolean;
            triggersEnabled?: boolean;
            funnelsEnabled?: boolean;
            websitesEnabled?: boolean;
            opportunitiesEnabled?: boolean;
            dashboardStatsEnabled?: boolean;
            bulkRequestsEnabled?: boolean;
            appointmentsEnabled?: boolean;
            reviewsEnabled?: boolean;
            onlineListingsEnabled?: boolean;
            phoneCallEnabled?: boolean;
            conversationsEnabled?: boolean;
            assignedDataOnly?: boolean;
            adwordsReportingEnabled?: boolean;
            membershipEnabled?: boolean;
            facebookAdsReportingEnabled?: boolean;
            attributionsReportingEnabled?: boolean;
            settingsEnabled?: boolean;
            tagsEnabled?: boolean;
            leadValueEnabled?: boolean;
            marketingEnabled?: boolean;
            agentReportingEnabled?: boolean;
            botService?: boolean;
            socialPlanner?: boolean;
            bloggingEnabled?: boolean;
            invoiceEnabled?: boolean;
            affiliateManagerEnabled?: boolean;
            contentAiEnabled?: boolean;
            refundsEnabled?: boolean;
            recordPaymentEnabled?: boolean;
            cancelSubscriptionEnabled?: boolean;
            paymentsEnabled?: boolean;
            communitiesEnabled?: boolean;
            exportPaymentsEnabled?: boolean;
        };
        scopes?: "calendars/events.readonly" | "calendars/events.write" | "campaigns.readonly" | "contacts.write" | "conversations.readonly" | "conversations.write" | "conversations/message.readonly" | "conversations/message.write" | "invoices.readonly" | "invoices.write" | "invoices/schedule.readonly" | "invoices/schedule.write" | "invoices/template.readonly" | "invoices/template.write" | "locations/tags.readonly" | "locations/tags.write" | "medias.readonly" | "medias.write" | "opportunities.write" | "socialplanner/post.write" | "workflows.readonly" | "campaigns.write" | "contacts/bulkActions.write" | "workflows.write" | "triggers.write" | "funnels.write" | "websites.write" | "opportunities/leadValue.readonly" | "reporting/phone.readonly" | "reporting/adwords.readonly" | "reporting/facebookAds.readonly" | "reporting/attributions.readonly" | "reporting/agent.write" | "reporting/agent.readonly" | "reporting/reports.write" | "reporting/reports.readonly" | "payments.write" | "payments/refunds.write" | "payments/records.write" | "payments/exports.write" | "payments/subscriptionsCancel.write" | "reputation/review.write" | "reputation/listing.write" | "contentAI.write" | "dashboard/stats.readonly" | "marketing.write" | "eliza.write" | "settings.write" | "marketing/affiliate.write" | "blogs.write" | "membership.write" | "communities.write" | "certificates.write" | "certificates.readonly" | "adPublishing.write" | "adPublishing.readonly" | "private-integration-location.readonly" | "private-integration-location.write" | "private-integration-company.readonly" | "private-integration-company.write" | "native-integrations.readonly" | "native-integrations.write" | "wordpress.write" | "wordpress.read" | "custom-menu-link.readonly" | "custom-menu-link.write";
        roles?: {
            type?: "account" | "agency";
            role?: "admin" | "user";
            locationIds?: string[];
            restrictSubAccount?: boolean;
        };
        deleted?: boolean;
    }) | null>;
    update: (userId: string, options: import("../../types/users").UsersUpdateDTO, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | {
        id?: string;
        name?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        extension?: string;
        permissions?: {
            campaignsEnabled?: boolean;
            campaignsReadOnly?: boolean;
            contactsEnabled?: boolean;
            workflowsEnabled?: boolean;
            workflowsReadOnly?: boolean;
            triggersEnabled?: boolean;
            funnelsEnabled?: boolean;
            websitesEnabled?: boolean;
            opportunitiesEnabled?: boolean;
            dashboardStatsEnabled?: boolean;
            bulkRequestsEnabled?: boolean;
            appointmentsEnabled?: boolean;
            reviewsEnabled?: boolean;
            onlineListingsEnabled?: boolean;
            phoneCallEnabled?: boolean;
            conversationsEnabled?: boolean;
            assignedDataOnly?: boolean;
            adwordsReportingEnabled?: boolean;
            membershipEnabled?: boolean;
            facebookAdsReportingEnabled?: boolean;
            attributionsReportingEnabled?: boolean;
            settingsEnabled?: boolean;
            tagsEnabled?: boolean;
            leadValueEnabled?: boolean;
            marketingEnabled?: boolean;
            agentReportingEnabled?: boolean;
            botService?: boolean;
            socialPlanner?: boolean;
            bloggingEnabled?: boolean;
            invoiceEnabled?: boolean;
            affiliateManagerEnabled?: boolean;
            contentAiEnabled?: boolean;
            refundsEnabled?: boolean;
            recordPaymentEnabled?: boolean;
            cancelSubscriptionEnabled?: boolean;
            paymentsEnabled?: boolean;
            communitiesEnabled?: boolean;
            exportPaymentsEnabled?: boolean;
        };
        scopes?: "calendars/events.readonly" | "calendars/events.write" | "campaigns.readonly" | "contacts.write" | "conversations.readonly" | "conversations.write" | "conversations/message.readonly" | "conversations/message.write" | "invoices.readonly" | "invoices.write" | "invoices/schedule.readonly" | "invoices/schedule.write" | "invoices/template.readonly" | "invoices/template.write" | "locations/tags.readonly" | "locations/tags.write" | "medias.readonly" | "medias.write" | "opportunities.write" | "socialplanner/post.write" | "workflows.readonly" | "campaigns.write" | "contacts/bulkActions.write" | "workflows.write" | "triggers.write" | "funnels.write" | "websites.write" | "opportunities/leadValue.readonly" | "reporting/phone.readonly" | "reporting/adwords.readonly" | "reporting/facebookAds.readonly" | "reporting/attributions.readonly" | "reporting/agent.write" | "reporting/agent.readonly" | "reporting/reports.write" | "reporting/reports.readonly" | "payments.write" | "payments/refunds.write" | "payments/records.write" | "payments/exports.write" | "payments/subscriptionsCancel.write" | "reputation/review.write" | "reputation/listing.write" | "contentAI.write" | "dashboard/stats.readonly" | "marketing.write" | "eliza.write" | "settings.write" | "marketing/affiliate.write" | "blogs.write" | "membership.write" | "communities.write" | "certificates.write" | "certificates.readonly" | "adPublishing.write" | "adPublishing.readonly" | "private-integration-location.readonly" | "private-integration-location.write" | "private-integration-company.readonly" | "private-integration-company.write" | "native-integrations.readonly" | "native-integrations.write" | "wordpress.write" | "wordpress.read" | "custom-menu-link.readonly" | "custom-menu-link.write";
        roles?: {
            type?: "account" | "agency";
            role?: "admin" | "user";
            locationIds?: string[];
            restrictSubAccount?: boolean;
        };
        deleted?: boolean;
    }) | null>;
    delete: (userId: string, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/users").UsersDeleteDTO) | null>;
};
