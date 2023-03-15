import fs from "fs";
import { join } from "path";

const settingsDirectory = join(
	process.cwd(),
	process.platform === "win32" ? "content\\contents" : "content/contents"
);

export function getSettingSlugs() {
	return fs.readdirSync(settingsDirectory);
}

export function getSettingByName(name) {
	const realSlug = name.replace(/\.json$/, "");
	const fullPath = join(settingsDirectory, `${realSlug}.json`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const jsonContents = JSON.parse(fileContents);

	return jsonContents;
}

export function getSettings(query = "*") {
	const settings = {};
	const settingNames = getSettingSlugs();

	settingNames.map((name) => {
		const settingData = getSettingByName(name);
		const realName = name.replace(/\.json$/, "");

		settings[realName] = settingData;
		console.log(settings);
		return name;
	});

	if (query === "*") {
		return settings;
	}

	return settings[query];
}
