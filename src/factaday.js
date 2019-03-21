const request = require("request-promise-native");

const fact = (month, day) => {
  const url = `https://history.muffinlabs.com/date/${month}/${day}`;

  return request({ url: url, json: true })
    .then(res => {
      let date = res.date;
      let year = res.data.Events[12].year;
      let text = res.data.Events[12].text;
      console.log(date, year, text);
      return {
        date,
        year,
        text
      };
    })
    .catch(err => console.log(err));
};

// fact(10, 03);

module.exports = fact;
