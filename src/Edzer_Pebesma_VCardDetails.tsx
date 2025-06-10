// React Component (or JSX)

import React from 'react';
import './App.css'; // Assuming you have a CSS file for styles
import classNames from "classnames";

const Edzer_Pebesma_VCardDetails = () => {
  return (
    <>

    <ul className={classNames("vcard-details")}>
      <li
        className={classNames("vcard-detail", "pt-1", "hide-sm", "hide-md")}
        itemProp="worksFor"
        aria-label="Organization: Institute for Geoinformatics, Universität Münster"
      >
        <svg
          className="octicon octicon-organization"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path d="M1.75 16A1.75 1.75 0 0 1 0..." />
        </svg>
        <span className="p-org">
          <div>Institute for Geoinformatics, Universität Münster</div>
        </span>
      </li>

      <li
        className={classNames("vcard-detail", "pt-1", "hide-sm", "hide-md")}
        itemProp="homeLocation"
        aria-label="Home location: Münster, Germany"
      >
        <svg
          className="octicon octicon-location"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path d="m12.596 11.596-3.535 3.536a1..." />
        </svg>
        <span className="p-label">Münster, Germany</span>
      </li>

      {/* Additional list items using classNames */}
    </ul>

    </>
  );
};

export default Edzer_Pebesma_VCardDetails;
