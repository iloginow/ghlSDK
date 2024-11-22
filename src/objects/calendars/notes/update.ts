import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  CalendarBlockSlotCreateSchemaDTO,
  CalendarGetCreateUpdateNoteSuccessfulResponseDto,
  CalendarEventDTO,
  CalendarGetNoteSchemaDTO,
} from "../../../types/calendars";
const baseUrl =
  "https://services.leadconnectorhq.com/calendars/events/appointments";

type ResponseTypes =
  | CalendarGetCreateUpdateNoteSuccessfulResponseDto
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const update = async (
  appointmentId: CalendarEventDTO["id"],
  noteId: CalendarGetNoteSchemaDTO["id"],
  options: CalendarBlockSlotCreateSchemaDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const URL = `${baseUrl}/${appointmentId}/notes/${noteId}`;
    const response = await fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-04-15",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(options),
    });
    const data: ResponseTypes = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default update;
