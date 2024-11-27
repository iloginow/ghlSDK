export declare const schedules: {
    get: (scheduleId: string, options: import("../../../types/invoices").InvoicesVoidDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/invoices").InvoicesScheduleResponseDTO) | null>;
    search: (options: import("../../../types/invoices").InvoicesScheduleSearchOptions, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/invoices").InvoicesListSchedulesResponseDTO) | null>;
    create: (options: import("../../../types/invoices").InvoicesCreateScheduleDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/invoices").InvoicesGetScheduleResponseDTO) | null>;
    update: (scheduleId: string, options: import("../../../types/invoices").InvoicesUpdateScheduleDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/invoices").InvoicesGetScheduleResponseDTO) | null>;
    delete: (scheduleId: string, options: import("../../../types/invoices").InvoicesCancelScheduleDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccessDeleteDTO) | null>;
    startSchedule: (scheduleId: string, options: import("../../../types/invoices").InvoicesScheduleDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/invoices").InvoicesScheduleResponseDTO) | null>;
    manageAutoPay: (scheduleId: string, options: import("../../../types/invoices").InvoicesScheduleDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/invoices").InvoicesScheduleResponseDTO) | null>;
    cancelScheduled: (scheduleId: string, options: import("../../../types/invoices").InvoicesCancelScheduleDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/invoices").InvoicesScheduleResponseDTO) | null>;
};
