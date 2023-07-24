import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import twitterIcon from '@iconify/icons-mdi/twitter';

const Header = () => {
  const linkedInURL = 'https://www.linkedin.com/in/george-romaios/';

  return (
    <header className="header">
      <h1><u><Icon icon={locationIcon} /> Παρακολούθηση πυρκαγιών </u></h1>
      <div style={{ textAlign: 'center' }}>
        <p>(Συλλογή Δεδομένων απο τη NASA) | Created by <a href={linkedInURL} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>George Romaios</a></p>
      </div>
    </header>
  )
}

export default Header;
