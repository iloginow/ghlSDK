"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/locations";
const update = async (locationId, customValueId, options, authToken) => {
    const updateAppointment = async () => {
        const URL = `${baseUrl}/${locationId}/customValues/${customValueId}`;
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Version: "2021-07-28",
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(options),
        });
        const data = await response.json();
        return data;
    };
    try {
        return await (0, requestUtils_1.withExponentialBackoff)(updateAppointment);
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.default = update;
//# sourceMappingURL=update.js.map