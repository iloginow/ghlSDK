import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO,
  CalendarGroupDTO,
} from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/calendars/groups";

type ResponseTypes =
  | { success: true }
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const disable = async (
  groupId: CalendarGroupDTO["id"],
  options: { isActive: boolean },
  authToken: string
): Promise<ResponseTypes> | null => {
  const URL = `${baseUrl}/${groupId}/status`;

  const disableRequest = async () => {
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
  };

  try {
    return await withExponentialBackoff(disableRequest);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default disable;
