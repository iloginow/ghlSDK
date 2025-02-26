export declare const products: {
    get: (locationId: string, productId: string, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/products").ProductsGetResponseDTO> | null;
    list: (options: {
        limit?: string;
        offset?: string;
        search?: string;
        locationId: string;
    }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/products").ProductsListResponseDTO> | null;
    search: (productId: string, options: {
        locationId: string;
        ids?: string;
        limit?: number;
        offset?: number;
    }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/products").ProductsPriceListResponseDTO> | null;
    create: (options: import("../../types/products").ProductsCreateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/products").ProductsGetResponseDTO> | null;
    update: (productId: string, options: import("../../types/products").ProductsUpdateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/products").ProductsGetResponseDTO> | null;
    delete: (locationId: string, productId: string, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/products").ProductsDeleteResponseDTO> | null;
    prices: {
        get: (locationId: string, productId: string, priceId: string, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/products").ProductsDefaultPriceResponseDTO> | null;
        search: (productId: string, options: {
            locationId: string;
            ids?: string;
            limit?: number;
            offset?: number;
        }, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/products").ProductsPriceListResponseDTO> | null;
        create: (productId: string, options: import("../../types/products").ProductsPriceCreateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/products").ProductsDefaultPriceResponseDTO> | null;
        update: (productId: string, priceId: string, options: import("../../types/products").ProductsPriceUpdateDTO, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/products").ProductsDefaultPriceResponseDTO> | null;
        delete: (locationId: string, productId: string, priceId: string, authToken: string) => Promise<import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/products").ProductsDeleteResponseDTO> | null;
    };
};
