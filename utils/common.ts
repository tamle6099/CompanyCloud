export const scrollToElementById = (id: string) => {
	if (!!document) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView?.({
				block: window.innerWidth < 768 ? "start" : "center",
			});
		}
	}
};

const navHeight = 60;

export const isInViewportById = (id: string, offset?: number) => {
	const box = document.getElementById(id);
	if (box && window && document) {
		const rect = box.getBoundingClientRect();

		return rect.top - navHeight - (offset ?? 240) <= 0 && rect.bottom - navHeight >= 0;
	} else return false;
};
