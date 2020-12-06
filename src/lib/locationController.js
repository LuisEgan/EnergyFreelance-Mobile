// These methods will filter the location values, based on the parameters ids.
// Because all the location data is related to each other, we will only return the data
// that fulfills the relation
// There will be default values for each, in case no arguments are given, and it will return all data

export const getStates = (locations) => {
  let states = [];

  locations.forEach((l) => {
    if (!containsObject(l.id, states)) {
      states.push({
        id: l.id,
        title: l.stateName,
        value: l.id.toString(),
      });
    }
  });

  return states.sort(compareObjTitles);
};

export const getCounties = (locations) => {
  let counties = [];

  if (locations === undefined) {
    return counties;
  }

  locations.forEach((l) => {
    if (!containsObject(l.id, counties)) {
      counties.push({
        id: l.id,
        title: l.countyName,
        value: l.id.toString(),
      });
    }
  });

  return counties.sort(compareObjTitles);
};

export const getBasins = (locations) => {
  let basins = [];

  locations.forEach((l) => {
    if (!containsObject(l.id, basins)) {
      basins.push({
        id: l.id,
        title: l.basinName,
        value: l.id.toString(),
      });
    }
  });

  return basins.sort(compareObjTitles);
};

export const getCountiesByState = (locations, state) => {
  let counties = [];
  if (locations === undefined) {
    return counties;
  }

  locations.forEach((l) => {
    if (!containsObject(l.id, counties)) {
      if (l.state.id === state) {
        counties.push({
          id: l.id,
          title: l.countyName,
          value: l.id.toString(),
        });
      }
    }
  });

  return counties.sort(compareObjTitles);
};

export const getStatesByCountyAndBasin = (locations, county = 0, basin = 0) => {
  let states = [];

  locations.forEach((l) => {
    // Flags to add to the results
    let passCounty = true;
    let passBasin = true;

    if (county !== 0) {
      if (county !== l.county.id) {
        passCounty = false;
      }
    }

    if (basin !== 0) {
      if (basin !== l.basin.id) {
        passBasin = false;
      }
    }

    if (passCounty && passBasin) {
      if (!containsObject(l.county.state.id, states)) {
        states.push({
          id: l.county.state.id,
          title: l.county.state.stateName,
          value: l.county.state.id.toString(),
        });
      }
    }
  });

  return states.sort(compareObjTitles);
};

export const getCountiesByStateAndBasin = (locations, state = 0, basin = 0) => {
  let counties = [];

  locations.forEach((l) => {
    // Flags to add to the results
    let passState = true;
    let passBasin = true;

    if (state !== 0) {
      if (state !== l.county.state.id) {
        passState = false;
      }
    }

    if (basin !== 0) {
      if (basin !== l.basin.id) {
        passBasin = false;
      }
    }

    if (passState && passBasin) {
      if (!containsObject(l.county.id, counties)) {
        counties.push({
          id: l.county.id,
          title: l.county.countyName,
          value: l.county.id.toString(),
        });
      }
    }
  });

  return counties.sort(compareObjTitles);
};

export const getBasinsByStateAndCounty = (locations, state = 0, county = 0) => {
  let basins = [];

  locations.forEach((l) => {
    // Flags to add to the results
    let passState = true;
    let passCounty = true;

    if (state !== 0) {
      if (state !== l.county.state.id) {
        passState = false;
      }
    }

    if (county !== 0) {
      if (county !== l.county.id) {
        passCounty = false;
      }
    }

    if (passState && passCounty) {
      if (!containsObject(l.basin.id, basins)) {
        basins.push({
          id: l.basin.id,
          title: l.basin.basinName,
          value: l.basin.id.toString(),
        });
      }
    }
  });

  return basins.sort(compareObjTitles);
};

// Function to sort the object titles by alphabetical order
export const containsObject = (objId, list) => {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i].id === objId) {
      return true;
    }
  }

  return false;
};

const compareObjTitles = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};
