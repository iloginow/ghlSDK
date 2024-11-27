import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { CalendarByIdSuccessfulResponseDTO, CalendarDTO } from "../../types/calendars";
type ResponseTypes = CalendarByIdSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (calendarId: CalendarDTO["id"], options: Partial<CalendarDTO>, authToken: string) => Promise<ResponseTypes | null>;
export default update;
