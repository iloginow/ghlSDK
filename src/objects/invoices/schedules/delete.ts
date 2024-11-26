import {
  BadRequestDTO,
  SuccessDeleteDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { InvoicesCancelScheduleDTO } from "../../../types/invoices";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/invoices/schedule";

type ResponseTypes =
  | SuccessDeleteDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const del = async (
  scheduleId: string,
  options: InvoicesCancelScheduleDTO,
  authToken: string
): Promise<ResponseTypes | null> => {
  const URL = `${baseUrl}/${scheduleId}?` + new URLSearchParams(options);

  const executeRequest = async (): Promise<ResponseTypes> => {
    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      const error = new Error(`Request failed with status ${response.status}`);
      (error as any).response = response;
      throw error;
    }

    return response.json();
  };

  try {
    const data = await withExponentialBackoff(executeRequest);
    return data;
  } catch (error) {
    console.error("Failed after retries:", error);
    return null;
  }
};

export default del;
