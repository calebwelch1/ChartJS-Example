// $(document).ready(() => {
//   $(document).click(() => {
//     alert("working");
//   });
// });
// $(document).ready(() => {});
let myChart = document.getElementById("myChart").getContext("2d");
// let myChartTwo = document.getElementById("myChartTwo").getContext("2d");
// jquery not working for some reason
// $(".container").innerHtml("Working");

// Global Options
Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = "99";

//make a new object with myChart el
// takes two parameters, element in html and object of chart data
massPopBtn = document.getElementById("massPop");
nhPopBtn = document.getElementById("nhPop");
massPopBtn.addEventListener("click", () => {
  let massPopChart = new Chart(myChart, {
    type: "doughnut", //bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"],
      datasets: [
        {
          label: "Population",
          data: [679413, 185195, 154596, 115665, 111249],
          // backgroundColor: "green",
          backgroundColor: [
            "#f927f5",
            "#f18fd1",
            "	#979bf5",
            "#765bff",
            "#00f1ff",
          ],
          //adds grey border around bars in chart
          borderWidth: 1,
          borderColor: "#777",
          hoverBorderWidth: 3,
          hoverBorderColor: "Black",
        },
        // { label: "random", data: [111, 222, 333, 123, 432] },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Largest Cities in Massachusetts",
        fontSize: 25,
      },
      legend: {
        position: "right",
      },
      layout: {
        padding: {
          left: 50,
          right: 0,
          bottom: 0,
          top: 0,
        },
      },
      tooltips: {
        enabled: true,
      },
    },
  });
});

nhPopBtn.addEventListener("click", () => {
  let nhPopChart = new Chart(myChart, {
    type: "doughnut", //bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ["Manchester", "Nashua", "Concord", "Dover", "Rochester"],
      datasets: [
        {
          label: "Population",
          data: [113441, 90080, 43840, 32343, 32224],
          // backgroundColor: "green",
          backgroundColor: [
            "#ffb3ba",
            "#ffdfba",
            "	#ffffba",
            "#baffc9",
            "#bae1ff",
          ],
          //adds grey border around bars in chart
          borderWidth: 1,
          borderColor: "#777",
          hoverBorderWidth: 3,
          hoverBorderColor: "Black",
        },
        // { label: "random", data: [111, 222, 333, 123, 432] },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Largest Cities in New Hampshire",
        fontSize: 25,
      },
      legend: {
        position: "right",
      },
      layout: {
        padding: {
          left: 50,
          right: 0,
          bottom: 0,
          top: 0,
        },
      },
      tooltips: {
        enabled: true,
      },
    },
  });
});

document.getElementById("nhLine").addEventListener("click", () => {
  let nhPopChart = new Chart(myChart, {
    type: "line", //bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ["Manchester", "Nashua", "Concord", "Dover", "Rochester"],
      datasets: [
        {
          label: "Population",
          data: [113441, 90080, 43840, 32343, 32224],
          // backgroundColor: "green",
          backgroundColor: [
            "#f127f5",
            "#f18fd1",
            "	#979bf5",
            "#765bff",
            "#00f1ff",
          ],
          //adds grey border around bars in chart
          borderWidth: 1,
          borderColor: "#777",
          hoverBorderWidth: 3,
          hoverBorderColor: "Black",
        },
        // { label: "random", data: [111, 222, 333, 123, 432] },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Largest Cities in New Hampshire",
        fontSize: 25,
      },
      legend: {
        position: "right",
      },
      layout: {
        padding: {
          left: 50,
          right: 0,
          bottom: 0,
          top: 0,
        },
      },
      tooltips: {
        enabled: true,
      },
    },
  });
});
document.getElementById("massLine").addEventListener("click", () => {
  let massPopChart = new Chart(myChart, {
    type: "line", //bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"],
      datasets: [
        {
          label: "Population",
          data: [679413, 185195, 154596, 115665, 111249],
          // backgroundColor: "green",
          backgroundColor: [
            "#f927f5",
            "#f18fd1",
            "	#979bf5",
            "#765bff",
            "#00f1ff",
          ],
          //adds grey border around bars in chart
          borderWidth: 1,
          borderColor: "#777",
          hoverBorderWidth: 3,
          hoverBorderColor: "Black",
        },
        // { label: "random", data: [111, 222, 333, 123, 432] },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Largest Cities in Massachusetts",
        fontSize: 25,
      },
      legend: {
        position: "right",
      },
      layout: {
        padding: {
          left: 50,
          right: 0,
          bottom: 0,
          top: 0,
        },
      },
      tooltips: {
        enabled: true,
      },
    },
  });
});
// bubble chart>> units sold x metascore x
document.getElementById("popularGameType").addEventListener("click", () => {
  let popularGameChart = new Chart(myChart, {
    type: "bubble", //bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: [
        "Animal Crossing: New Horizon",
        "Doom Eternal",
        "Resident Evil 3",
        "The Last of Us: Part II",
        "Final Fantasy 7",
      ],
      datasets: [
        {
          label: "Most Popular Games 2020",
          //x metascor y userscore r units sold (in millions)
          data: [
            { x: 9.0, y: 5.3, r: 134.1 },
            { x: 8.7, y: 8.4, r: 32 },
            { x: 7.9, y: 6.4, r: 25 },
            { x: 9.5, y: 4.1, r: 170 },
            { x: 8.7, y: 8.0, r: 35 },
          ],
          // backgroundColor: "green",
          backgroundColor: [
            "#f927f5",
            "#f18fd1",
            "	#979bf5",
            "#765bff",
            "#00f1ff",
          ],
          //adds grey border around bars in chart
          borderWidth: 1,
          borderColor: "#777",
          hoverBorderWidth: 3,
          hoverBorderColor: "Black",
        },
        // { label: "random", data: [111, 222, 333, 123, 432] },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Most Popular Video Games 2020",
        fontSize: 25,
      },
      legend: {
        position: "right",
      },
      layout: {
        padding: {
          left: 50,
          right: 0,
          bottom: 0,
          top: 0,
        },
      },
      tooltips: {
        enabled: true,
      },
    },
  });
});
// we can't have two at once in the same page... must be how canvas works
// let massPopChart = new Chart(myChartTwo, {
//   type: "bar", //bar, horizontalBar, pie, line, doughnut, radar, polarArea
//   data: {
//     labels: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"],
//     datasets: [
//       {
//         label: "Population",
//         data: [679413, 185195, 154596, 115665, 111249],
//       },
//     ],
//   },
//   options: {},
// });
