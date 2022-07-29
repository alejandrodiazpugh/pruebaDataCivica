import React, { useEffect, useState, useReducer } from "react";
import { csv, DSVRowArray } from "d3";
import { ResponsiveLine, Serie } from "@nivo/line";

type chartData = [
  {
    'id'?: string;
    'data': [
      {
        'x': string;
        'y': number;
      },
    ];
  }
];

export default function DataFetch() {
  const dataUrl: string =
    "https://gist.githubusercontent.com/alejandrodiazpugh/bb983cb55671ad9a79eb2577cab12008/raw/identificacion_humana.csv";

  const [data, setData] = useState<DSVRowArray<string>>();
  const [graphData, setGraphData] = useState<Array<Serie>|any>([]);
  const [loading, setLoading] = useState(true);

  const mockData = [
    {
      id: "group A",
      data: [
        {
          x: 59,
          y: 119,
        },
        {
          x: 97,
          y: 10,
        },
        {
          x: 3,
          y: 60,
        },
      ],
    },
    {
      id: "group B",
      data: [
        {
          x: 44,
          y: 56,
        },
        {
          x: 14,
          y: 108,
        },
        {
          x: 62,
          y: 97,
        },
      ],
    },
    {
      id: "group C",
      data: [
        {
          x: 40,
          y: 82,
        },
        {
          x: 79,
          y: 7,
        },
        {
          x: 7,
          y: 36,
        },
      ],
    },
    {
      id: "group E",
      data: [
        {
          x: 43,
          y: 61,
        },
        {
          x: 12,
          y: 80,
        },
        {
          x: 43,
          y: 60,
        },
      ],
    },
  ];
  useEffect(() => {
    csv(dataUrl) // obtener datos
      .then(setData)
      .then(() => {
        let chartData: chartData = [{data:[{x:'', y:0}]}];

        for (const column of data?.columns!) {
        //   chartData.push({ id: column });
          data?.map((caso: any) => {
            let parsedY: number = parseInt(caso[column]);
            if (isNaN(parsedY)) {
              return;
            }
            let parsedX: string = `${caso.Año}-${caso.Trimestre}`;
            let dataPoint = { x: parsedX, y: parsedY };
            if(!chartData[data.columns.indexOf(column)]) {
                chartData[data.columns.indexOf(column)] = {id: column, data: [dataPoint]}
            } else {
                chartData[data.columns.indexOf(column)].data?.push(dataPoint);
            }
          });
        }
        chartData.splice(0,3);
        console.log(chartData);
        setTimeout(() => {
            setGraphData(chartData);
        }, 1000)
        
      })
      .catch((err) => {
        console.log("Error:" + err);
      })
      .finally(() => {
        // esperar a que lleguen los datos
        setLoading(false);
      });
  }, [loading]);

 

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
    return e.currentTarget.value;
  };
  return (
    <div>
      <h2>My Data:</h2>
      {loading ? (
        <h2>CARGANDO...</h2>
      ) : (
        <div>
          <label htmlFor="year">Seleccione año:</label>
          <select name="year" id="year" onChange={handleChange}>
            <option value={""}>Todos</option>
            {[...new Set(data?.map((caso) => caso.Año))].map(
              (
                year: any //obtener set de los años posibles para pulldown
              ) => (
                <option value={year}>{year}</option>
              )
            )}
          </select>
          <label htmlFor="trimester">Seleccione trimestre:</label>
          <select name="trimester" id="trimester" onChange={handleChange}>
            <option value={""}>Todos</option>
            {[...new Set(data?.map((caso) => caso.Trimestre))].map(
              // obtener set de los trimestres posibles para pulldown
              (trimester: any) => (
                <option value={trimester}>{trimester}</option>
              )
            )}
          </select>
          <label htmlFor="institution">Seleccione Institución:</label>
          <select name="institution" id="institution" onChange={handleChange}>
            <option value={""}>Todos</option>
            {[...new Set(data?.map((caso) => caso.Institución))].map(
              //obtener set de instituciones para pulldown
              (institution: any) => (
                <option value={institution}>{institution}</option>
              )
            )}
          </select>
        </div>
      )}

      <div style={{ width: "80vw", height: "50vh" }}>
        <ResponsiveLine
          data={graphData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
