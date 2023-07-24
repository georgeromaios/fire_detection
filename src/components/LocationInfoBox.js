const LocationInfoBox = ({ info }) => {
    if (!info) {
      return <div className="location-info">Δεν Βρέθηκαν Δεδομένα.</div>;
    }
  
    return (
      <div className="location-info">
        <h2><u>Πληροφορίες Πυργκαγιάς</u></h2>
        <ul>
          <li>
            Αναγνωριστικό:   {info.id || "Δεν Βρέθηκαν Δεδομένα"}  
          </li>
          <li>
            Τίτλος:   {info.title || "Δεν Βρέθηκαν Δεδομένα"}  
          </li>
          <li>
            Περιγραφή:   {info.description || "Δεν Βρέθηκαν Δεδομένα"}  
          </li>
          <li>
            Ημερομηνία:   {info.geometries[0]?.date || "Δεν Βρέθηκαν Δεδομένα"}  
          </li>
          <li>
            Τοποθεσία:{" "}
              
              {info.geometries[0]?.coordinates
                ? info.geometries[0].coordinates.join(", ")
                : "Δεν Βρέθηκαν Δεδομένα"}
              
          </li>
        </ul>
      </div>
    );
  };
  
  export default LocationInfoBox;
  