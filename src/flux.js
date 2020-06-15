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
       descripcion: '',
       // Productos para la tienda
       tiendaSeleccionada: [],
       tiendatotal: [],
       tiendaSalsa: [],
       tiendatotalsalsa: [],

       // Carrito
       carrito: [],
       totalCarrito: [],
       
       // Productos comprados
       ItemProductoCompradoId: [],
       CantidaProductoComprado: [],
       precioProductoSeleccionado: [],
       cantidadProductoSeleccionado: [],
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
        e.preventDefault();
        console.log(e.target.name);
        console.log(e.target.value);
        setStore({
          [e.target.name]: e.target.value
        });
      },
// imagen
        handleChangeFile: e => {
          e.preventDefault();
          console.log(e, "foto")
          setStore({
            avatar: e.target.files[0]
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
        console.log(data, "para ver")
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



// Tienda salsas
      store: (e, id) => {

				getActions().tienda(`/api/tienda`);
			},

			tienda: async (url) => {

				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},

				})
				const dato = await resp.json();
				console.log(dato)
				if (dato.msg) {
					setStore({
						error: dato
					})
				} else {
					setStore({
						tiendaSeleccionada: dato,
						tiendatotal: dato,
					});
				}
      },
      
      salsas: (e, id) => {

				getActions().tiendaSalsa(`/api/salsas`);
			},

			tiendaSalsa: async (url) => {

				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},

				})
				const dato = await resp.json();
				console.log(dato)
				if (dato.msg) {
					setStore({
						error: dato
					})
				} else {
					setStore({
						tiendaSalsa: dato,
						tiendatotalsalsa: dato,
					});
				}
      },

      // Logica para el carrito
      
      addToCart: producto => {
        const store = getStore();

				let { carrito } = store;
				let existe = false;
				let newtotalCarrito = 0;
				let newCarrito = carrito.map((item) => {
					if (JSON.stringify(item.producto) === JSON.stringify(producto)) {
						item.cantidad += 1;
						existe = true;
						return item;
					}
					return item;
				})
				if (!existe) {
					newCarrito.push({
						id: carrito.length + 1,
						producto: producto,
						cantidad: 1
					})
				}
				newCarrito.map(item => {
					return newtotalCarrito = newtotalCarrito + (item.cantidad * item.producto.precio);
				})
				setStore({
					carrito: newCarrito,
					totalCarrito: newtotalCarrito
				})
      },
      // Agregando items desde el carrito

      addToCartI: producto => {
        const store = getStore();

				let { carrito } = store;
				let existe = false;
				let newtotalCarrito = 0;

				let newCarrito = carrito.map((item) => {
					if (JSON.stringify(item.producto) === JSON.stringify(producto.producto)) {
						item.cantidad += 1;
						existe = true;
						return item;
					}
					return item;
				})
				if (!existe) {
					newCarrito.push({
						id: carrito.length + 1,
						producto: producto,
						cantidad: 1
					})
				}
				newCarrito.map(item => {
					return newtotalCarrito = newtotalCarrito + (item.cantidad * item.producto.precio);
				})
				setStore({
					carrito: newCarrito,
					totalCarrito: newtotalCarrito
				})
      },
      
      // Borradno itenes desde el carrito

      addToCartII: producto => {
        const store = getStore();

				let { carrito } = store;
				let existe = false;
				let newtotalCarrito = 0;
				let newCarrito = carrito.map((item) => {
					if (JSON.stringify(item.producto) === JSON.stringify(producto.producto)) {
						item.cantidad -= 1;
            existe = true;
						return item;
					}
					return item;
        })
        const isCero = (element) => element.cantidad === 0;
        let index = carrito.findIndex(isCero);

        
        if (index !==-1) {
          newCarrito.splice(index, 1)
        }
				newCarrito.map(item => {
					return newtotalCarrito = newtotalCarrito + (item.cantidad * item.producto.precio);
				})
				setStore({
					carrito: newCarrito,
					totalCarrito: newtotalCarrito
				})
      },
      
      // Compra de Productos


			productoComprado: (e) => {
        const store = getStore();
        console.log(store.carrito, "cuando se va a comprar")

				store.carrito.map(ItemCarrito => {
							store.ItemProductoCompradoId.push(ItemCarrito.producto.id);
							store.CantidaProductoComprado.push(ItemCarrito.cantidad);
              store.precioProductoSeleccionado.push(ItemCarrito.producto.precio);							
					return ' '
				});
			

				let data = {
					//"usuario_id": store.currentUser.Usuario.id,
					"ItemProductoCompradoId": store.ItemProductoCompradoId,
					"CantidaProductoComprado": store.CantidaProductoComprado,
					"precioProductoSeleccionado": store.precioProductoSeleccionado,
					"totalFactura":store.totalCarrito,
					"usuarioActual":store.currentUser,

				}
				console.log(data, "comprado")


				getActions().productosComprados(`/api/checkout/`, data);
			},

			productosComprados: async (url, data, history) => {
				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + url, {
					method: 'PUT',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				const dato = await resp.json();
				console.log(dato)
				if (dato.msg) {
					setStore({
						error: dato
					})
				} else {
          setStore({productosActualizados: dato})
          history.push("/e-commerce");
				}
			},

      
    }
  };
};

export default getState;
