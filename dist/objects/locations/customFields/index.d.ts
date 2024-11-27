export declare const customFields: {
    get: (locationId: string, customFieldId: string, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/locations").LocationsCFResponseDTO> | null;
    search: (locationId: string, options: import("../../../types/locations").LocationsCFSearchParamsDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/locations").LocationsCFsResponseDTO> | null;
    create: (locationId: string, options: import("../../../types/locations").LocationsCFCreateDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/locations").LocationsCVResponseDTO> | null;
    update: (locationId: string, customFieldId: string, options: import("../../../types/locations").LocationsCFUpdateDTO, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/locations").LocationsCFResponseDTO> | null;
    delete: (locationId: string, customFieldId: string, authToken: string) => Promise<import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccededDeleteDTO> | null;
};