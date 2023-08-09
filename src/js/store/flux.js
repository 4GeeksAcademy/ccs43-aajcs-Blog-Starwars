const getState = ({ getStore, getActions, setStore }) => {
  const API_URL = "https://www.swapi.tech/api/";
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      people: [],
      peoples: [],
      planets: [],
      planet: [],
      vehicles: [],
      vehicle: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      leerDatosPeoples: async () => {
        try {
          const store = getStore();
          console.log(store);
          const requestConfig = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          };
          const response = await fetch(API_URL + "people", requestConfig);

          const body = await response.json();
          if (body.message === "ok") {
            console.log(body.results);
            body.results?.map(async (e) => {
              console.log(e.url);
              const response = await fetch(e.url, requestConfig);

              const body = await response.json();
              setStore({ peoples: [...store.peoples, body.result] });
            });
          }

          setStore({ people: body.results });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      getCharacters: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.API_URL}/people`);
          if (response.ok) {
            const data = await response.json();
            console.log(data.results);
            data.results.forEach(async (element) => {
              let responseElement = await fetch(
                `${store.API_URL}/people/${element.uid}`
              );
              let dataItem = await responseElement.json();
              console.log(dataItem);
              // setStore({ characters: [...store.characters, dataItem.result] });
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
      leerDatosPlanets: async () => {
        try {
          const store = getStore();
          console.log(store);
          const requestConfig = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          };
          const response = await fetch(API_URL + "planets", requestConfig);

          const body = await response.json();
          if (body.message === "ok") {
            console.log(body.results);
            body.results?.map(async (e) => {
              console.log(e.url);
              const response = await fetch(e.url, requestConfig);

              const body = await response.json();
              setStore({ planets: [...store.planets, body.result] });
            });
          }

          setStore({ planet: body.results });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      leerDatosVehicles: async () => {
        try {
          const store = getStore();
          console.log(store);
          const requestConfig = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          };
          const response = await fetch(API_URL + "vehicles", requestConfig);

          const body = await response.json();
          if (body.message === "ok") {
            console.log(body.results);
            body.results?.map(async (e) => {
              console.log(e.url);
              const response = await fetch(e.url, requestConfig);

              const body = await response.json();
              setStore({ vehicles: [...store.vehicles, body.result] });
            });
          }

          setStore({ vehicle: body.results });
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
