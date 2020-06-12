const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base datos Angel
    store: {
      /////URL
      baseURL: "http://127.0.0.1:5000",

      // claves de usuario
      nombre: "",
      apellido: "",
      email: "",
      telefono:"",
      clave: "",
      currentUser: null,
      isAuthenticated: false,
      error: null,  
    },

    actions: {
      // autenticacion

      handlingInputs: e => {
     
        console.log(e.target.name);
        console.log(e.target.value);
        setStore({
          [e.target.name]: e.target.value
        });
      },


      registroUsuario: (e, history) => {
        e.preventDefault();
        const store = getStore();

        let data = {
          nombre: store.nombre,
          email: store.email,
          clave: store.clave,
          apellido: store.apellido,
          telefono: store.telefono,
        };
        console.log(data, "datos en el flux");

        getActions().registroUsuarioEmpresa("/api/register", data, history);
      },

      registroUsuarioEmpresa: async (url, data) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        console.log(dato, "del retorno del back");
        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            currentUser: dato,
            isAuthenticated: true,
            error: null
          });
        }
      },

      logingUsuario: (e, history) => {
        //e.preventDefault();
        console.log(e, "evento");
        const store = getStore();
        let data = {
          nombre: store.nombre,
          email: store.email,
          clave: store.clave
        };
        console.log(data, "en el loging");
        getActions().loging("/api/loging", data, history);
      },

      loging: async (url, data, history) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        console.log(dato, "retorno del loging");
        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            currentUser: dato,
            isAuthenticated: true,
            error: null
          });
          sessionStorage.setItem("currentUser", JSON.stringify(dato));
          sessionStorage.setItem("isAuthenticated", true);
          history.push("/admin/dashboard");
        }
      }



      
    }
  };
};

export default getState;
