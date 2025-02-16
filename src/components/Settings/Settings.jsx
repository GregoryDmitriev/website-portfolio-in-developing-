import { useContext, useState } from "react";
import { CiSettings } from "react-icons/ci";

import styles from "./settings.module.scss";

import { LanguageButton } from "./LanguageButton";
import { ThemeButton } from "./ThemeButton";
import { ThemeContext } from "@/providers";

const Settings = () => {
	const [open, setOpen] = useState(false);
	const [theme] = useContext(ThemeContext);

	const handleClick = () => {
		setOpen(!open);
	};

	const styleTheme = theme === "light" ? styles.light : styles.dark;

	return (
		<div className={`${styles.settings} ${styleTheme} `}>
			<div className={`${styles.container} ${styleTheme} `}>
				{open && (
					<div className={`${styles.btnSettings} ${styleTheme} `}>
						<LanguageButton />
						<ThemeButton />
					</div>
				)}
				<div className={`${styles.iconContainer} ${styleTheme} `}>
					<CiSettings
						className={`${styles.iconSettings} ${styleTheme} `}
						onClick={handleClick}
					/>
				</div>
			</div>
		</div>
	);
};

export { Settings };
