export const JSONParser = (data: any) => {
	try {
		return JSON.parse(data);
	} catch {
		return null;
	}
};
