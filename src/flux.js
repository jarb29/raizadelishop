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
       // Nombre Producto

       avatar: '',
       nombreProducto: '',
       precio: '',
       categoria: '',
       descripcion: ''
    },

    actions: {
      // autenticacion
      isAuthenticated: () => {
        if (sessionStorage.getItem("currentUser")) {
          // Restaura el contenido al campo de texto
          let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
          let isAuthenticated = sessionStorage.getItem("isAuthenticated");
          setStore({
            currentUser: currentUser,
            isAuthenticated: isAuthenticated
          });
        }
      },

// inputs
      handlingInputs: e => {
     
        console.log(e.target.name);
        console.log(e.target.value);
        console.log(e);
        setStore({
          [e.target.name]: e.target.value
        });
      },
// imagen
        handleChangeFile: e => {
          setStore({
            [e.target.name]: e.target.files[0]
          })
        },

// Registro usuario

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

// Login usuario
      logingUsuario: (e, history) => {
        //e.preventDefault();
        console.log(e, "evento");
        console.log(history, "history");
        const store = getStore();
        let data = {
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
          history.push("/e-commerce");
        }
      },

      // Login out
      logout: (e, history) => {
        sessionStorage.removeItem("currentUser");
        sessionStorage.removeItem("isAuthenticated");
        setStore({
          currentUser: null,
          isAuthenticated: false
        });
      },

      // Agregando Productos

      handleSubmitProducto: (e, history) => {
				e.preventDefault();
				const store = getStore();
				let formData = new FormData();
				formData.append("nombreProducto", store.nombreProducto);
				formData.append("descripcion", store.descripcion);
				formData.append("precio", store.precio);
				formData.append("categoria", store.categoria);
				if (store.avatar !== ' ') {
					formData.append("avatar", store.avatar)

				} else { setStore({ error: { "msg": "Por favor agregar foto" } }) };
				console.log(store.avatar);



				getActions().register('/api/administrador', formData, history)
			},

			register: async (url, data, history) => {
				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + url, {
					method: 'POST',
					body: data
				})
				const info = await resp.json();
				console.log(info)

				if (info.msg) {
					setStore({
						error: null,
						productoAgregado: info.msg,
						isAuthenticated: true,
					})
					sessionStorage.getItem('isAuthenticated', true)
				}
				console.log(store.productoAgregado)
			},




      
    }
  };
};

export default getState;
