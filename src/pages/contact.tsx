import type { HolyPage } from '../App';
import { ObfuscatedThemeA } from '../ThemeElements';
import { Obfuscated } from '../obfuscate';
import { useTranslation } from 'react-i18next';

const Contact: HolyPage = () => {
	const { t } = useTranslation('link');

	return (
		<>
			<ContactMeta />
			<main>
				<h1>{t('contact')}</h1>
				<table>
					<tbody>
						<tr>
							<td>VAHS Discord:</td>
							<td>
								<ObfuscatedThemeA href='https://dsc.gg/vahs' title="Server invite">
									<Obfuscated>https://dsc.gg/vahs</Obfuscated>
								</ObfuscatedThemeA>
							</td>
						</tr>
					</tbody>
				</table>
			</main>
		</>
	);
};

export default Contact;
