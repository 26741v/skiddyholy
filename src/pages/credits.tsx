import type { HolyPage } from '../App';
import Meta from '../Meta';
import { ObfuscatedThemeA } from '../ThemeElements';
import { Obfuscated } from '../obfuscate';
import { useTranslation } from 'react-i18next';

const CreditsMeta = () => <Meta title="Credits" />;

const Credits: HolyPage = () => {
	const { t } = useTranslation('credits');

	return (
		<>
			<CreditsMeta />{' '}
			<main>
				<ui>Made by ASJ.SOLUTIONS</ui>
			</main>
		</>
	);
};

export default Credits;
