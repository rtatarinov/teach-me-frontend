const findLanguage = (value, languages) => {
  const appLanguagesList = value.split(',');
  const result = languages.filter(({ iso: languageCode }) =>
    appLanguagesList.includes(languageCode),
  );

  if (result.length) {
    return result;
  }

  return ['en'];
};

export const getAppLanguage = () => localStorage.getItem('selectedLanguages');
export const setAppLanguage = (selectedLanguages) =>
  localStorage.setItem(
    'selectedLanguages',
    selectedLanguages.map((item) => item.iso).join(','),
  );

export const getInitialLocale = (languagesList) => {
  const appLanguage = getAppLanguage();

  if (appLanguage) {
    return findLanguage(appLanguage, languagesList);
  }

  const { navigator } = window;
  const { language } = navigator;
  const [browserSetting] = language.split('-');
  const browserLocale = findLanguage(browserSetting, languagesList);

  setAppLanguage(browserLocale);

  return browserLocale;
};
