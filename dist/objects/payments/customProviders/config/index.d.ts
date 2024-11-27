export declare const config: {
    get: (locationId: string, authToken: string) => Promise<import("../../../../types/_global").BadRequestDTO | import("../../../../types/_global").UnauthorizedDTO | import("../../../../types/_global").UnprocessableDTO | import("../../../../types/payments").PaymentsCustomProviderGetResponseDTO> | null;
    create: (locationId: string, options: import("../../../../types/payments").PaymentsCustomProviderConnectSchema, authToken: string) => Promise<import("../../../../types/_global").BadRequestDTO | import("../../../../types/_global").UnauthorizedDTO | import("../../../../types/_global").UnprocessableDTO | import("../../../../types/payments").PaymentsCustomProviderGetResponseDTO> | null;
    disconnect: (locationId: string, options: import("../../../../types/payments").PaymentsCustomProviderDeleteResponseDTO, authToken: string) => Promise<import("../../../../types/_global").BadRequestDTO | import("../../../../types/_global").UnauthorizedDTO | import("../../../../types/_global").UnprocessableDTO | import("../../../../types/payments").PaymentsCustomProviderDisconnectResponseDTO> | null;
};
