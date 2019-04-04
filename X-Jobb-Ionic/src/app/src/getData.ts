
//Fetches data from local file
export async function getMonthleyData() {
  return new Promise(resolve => {
    fetch('assets/JSON-Data/monthleyavarage.json').then(async res => {
      var data = await res.json()
      resolve(data)
    });
  })
}

//Fetches data from local file
export function getDaylyAvrageData() {
  return new Promise(resolve => {
    fetch('assets/JSON-Data/daylyavarage.json').then(async res => {
      var data = await res.json()
      resolve(data)
    });
  })
}

//Fetches data from local file
export function getAllData() {
  return new Promise(resolve => {
    fetch('assets/JSON-Data/data.json').then(async res => {
      var data = await res.json()
      resolve(data)
    });
  })
}

//Fetches data from local file with the amount of DATA that IOS could handle (40.000 data-points)
export function getIOSData() {
  return new Promise(resolve => {
    fetch('assets/JSON-Data/dataIOS.json').then(async res => {
      var data = await res.json()
      resolve(data)
    });
  })
}

//Parsing data from the data input. Used for the data.json file

export function parseAllData(data) {
  var dataArray = [];
  for (var i = 0; i < data.length; i++)
{
    var item = data[i];
    dataArray.push([
      item.Datum,
      item.Lufttemperatur
    ]);
  }
  return dataArray;
}

//Parsing data from the data input. Used for the monthleyavarage.json file
export function parseMonthleyData(data) {
  var dataArray = [];
  var keyArray = Object.keys(data);

  //Loop through all the years
  for (var year = 0; year < keyArray.length; year++) {
    //Loop through all the months in the year
    for (var index = 0; index < 12; index++) {
      dataArray.push([
        (keyArray[year] + "-" + String(index + 1)),
        data[keyArray[year]][index]
      ]);
    }
  }
  return dataArray;
}

//Parsing data from the data input. Used for the daylyavarage.json file
export function parseDaylyAvrageData(data) {
  var dataArray = [];
  var yearKeyArray = Object.keys(data);

  //Loop through all the years
  for (var year = 0; year < yearKeyArray.length; year++) {
    var monthKeyArray = Object.keys(data[yearKeyArray[year]])

    //Loop through all the months in the year
    for (var month = 0; month < monthKeyArray.length; month++) {
      var daysInMonth = data[yearKeyArray[year]][monthKeyArray[month]].length

      //Loop through all the days in the month
      for (var index = 0; index < daysInMonth; index++) {
        dataArray.push([
          (yearKeyArray[year] + "-" + monthKeyArray[month] + "-" +
            String(index + 1)),
          data[yearKeyArray[year]][monthKeyArray[month]][index]
        ]);
      }

    }
  }
  return dataArray;
}
