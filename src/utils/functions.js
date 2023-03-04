import Cookies from "js-cookie";

export const getToken = () => {
	return Cookies.get("skygoals-job-task-token");
};
export const getUsername = () => {
	return Cookies.get("skygoals-job-task-username");
};
