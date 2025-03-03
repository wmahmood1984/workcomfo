import React from "react";
import "./LanguageSelector.css"; // CSS for styling

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

const LanguageSelector = ({ onSelect }) => {
  return (
    <div className="language-selector">
      <h2>Select Language</h2>
      <ul>
        {languages.map((lang) => (
          <li key={lang.code} onClick={() => onSelect(lang.code)}>
            <span className="flag">{lang.flag}</span>
            <span className="language-name">{lang.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
