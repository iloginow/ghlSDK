export declare const tasks: {
    get: (contactId: import("../../../types/contacts").ContactDTO["id"], taskId: import("../../../types/contacts").ContactTaskDTO["id"], authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactTaskByIsSuccessfulResponseDTO) | null>;
    search: (contactId: import("../../../types/contacts").ContactDTO["id"], authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactTasksListSuccessfulResponseDTO) | null>;
    create: (contactId: import("../../../types/contacts").ContactDTO["id"], options: import("../../../types/contacts").ContactCreateTaskParamsDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactTaskByIsSuccessfulResponseDTO) | null>;
    update: (contactId: import("../../../types/contacts").ContactDTO["id"], taskId: import("../../../types/contacts").ContactTaskDTO["id"], options: import("../../../types/contacts").ContactUpdateTaskBodyDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactTaskByIsSuccessfulResponseDTO) | null>;
    updateStatus: (contactId: import("../../../types/contacts").ContactDTO["id"], taskId: import("../../../types/contacts").ContactTaskDTO["id"], options: import("../../../types/contacts").ContactUpdateTaskStatusParamsDTO, authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/contacts").ContactTaskByIsSuccessfulResponseDTO) | null>;
    delete: (contactId: import("../../../types/contacts").ContactDTO["id"], taskId: import("../../../types/contacts").ContactTaskDTO["id"], authToken: string) => Promise<(import("../../../types/_global").BadRequestDTO | import("../../../types/_global").UnauthorizedDTO | import("../../../types/_global").UnprocessableDTO | import("../../../types/_global").SuccededDeleteDTO) | null>;
};
