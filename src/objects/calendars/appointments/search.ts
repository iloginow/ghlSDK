import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { CalendarGetEventsSuccessfulResponseDTO } from "../../../types/calendars";
const baseUrl = "https://services.leadconnectorhq.com/calendars/events";

type QueryOptions = {
  locationId: string;
  startTime: string; // in milliseconds
  endTime: string; // in milliseconds
  calendarId?: string;
  groupId?: string;
  userId?: string;
};

type ResponseTypes =
  | CalendarGetEventsSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  options: QueryOptions,
  authToken: string
): Promise<ResponseTypes> | null => {
  try {
    const query = new URLSearchParams(options).toString();
    const URL = `${baseUrl}?${query}`;
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Version: "2021-04-15",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data: ResponseTypes = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default search;
