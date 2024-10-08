let myChart = document.getElementById("myChart").getContext("2d");

        let popChart = new Chart(myChart, {
        type: "pie",
        data: {
            labels: ["Akcje", "Obligacje", "Towary", "Nieruchomości"],
            datasets: [
            {
                label: "%",
                data: [4394073, 1208333, 721082, 490120],
                backgroundColor: ["#339af0", "#da77f2", "#40c057", "#66d9e8"],
                borderWidth: 0,
                borderColor: "#777"
            }
            ]
        },
        options: {
            plugins: {
            title: {
                display: true,
                text: "",
                fontSize: 25
            }
            }
        }
        });