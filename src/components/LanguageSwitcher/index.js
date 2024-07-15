import React from 'react';
import { useTranslation } from 'react-i18next';
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div>
      <select onChange={handleLanguageChange} defaultValue="en">
        <option value="en">English</option>
        <option value="kg">Kyrgyz</option>
        <option value="ru">Russian</option>
        <option value="kor">Korean</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
