import {i18n} from './stores/i18n.store';

export * from './components';
export * from './icons';

export const switchLang = (lang: Languages): Promise<void> => i18n.switchLang(lang);

export type {ToastMsg, ToastLevel} from './types/toast';
export * from './stores/toasts.store';
