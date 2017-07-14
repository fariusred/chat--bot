class Chatusuario extends React.Component {
    constructor(props){
        super(props);

        this.state={
         respuesta: ["Buenos dias le escribe un chat bot de Golden inflables con el fin de comunicarlo con un asesor y brindarle un mejor servicio" ] ,

            items:[],
            text:""

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleRespuesta= this.handleRespuesta.bind(this);
        this.handleCountclick=this.handleCountclick.bind(this);

    };


    handleRespuesta(e) {
 // aqui es donde falla en el hosting

        if (this.state.text === "hola" || this.state.text === "buenas tardes" || this.state.text === "buenas noches" ||  this.state.text === "buenos dias"){
            this.setState({respuesta: ["¿En que podemos Colaborarle?"]})
        }


        if (this.state.text === "quisiera hacer una cotización de un inflable que vi en la pagina" || this.state.text === "quisiera hacer una cotizacion de un inflable que vi en la pagina" || this.state.text === "buenos dias quisiera informacion acerca de un inflable que vi en su pagina") {
            this.setState({respuesta: ["Con todo el gusto solo debe rellenar el siguiente formulario y en menos de 15 minutos un asesor lo llamara",<Formulario/>]})
        }
        if ("buenas tardes"  !== this.state.text && "quisiera hacer una cotizacion de un inflable que vi en la pagina" !== this.state.text && "hola" !== this.state.text && "buenas noches" !== this.state.text && "buenos dias" !== this.state.text && "quisiera hacer una cotización de un inflable que vi en la pagina" !== this.state.text) {
            this.setState({respuesta: ["No pudimos entenderte pero no te preocupes rellana nuestro formulario y uno de nuestros asesores te llamara",<Formulario/>]})
        }


    };
    handleCountclick(e){
        if(e.target.id === "add"){
            this.setState({respuesta:this.state.respuesta+1});
        }

    };

    handleChange(e) {
        e.preventDefault();
        this.setState({text: e.target.value});
    };

handleSubmit(e){
        e.preventDefault();

        var newItem ={

            respuesta:this.state.respuesta,
            text: this.state.text,
          id: Date.now()
        };

        this.setState((prevState) =>({
            items:prevState.items.concat(newItem),
            text:"",
            respuesta: ""

        }));
};



    render() {
        console.log("ejecuta render");



        return (
            <div className="form">
                <div className="text-center">
                    <p className="titulo"> Golden Inflables
                    </p>
                </div>
                <form onSubmit={this.handleSubmit} name="formulario1" method="post"  action="subtmit">

                    <div className="conversaciones"> <div> <h3>Golden Inflables:</h3>  <ul> <li> {this.state.respuesta}</li>

                        {this.state.items.map(item => (
                            <li key={item.id}> {item.respuesta}</li>
                        ))}


                    </ul>   </div >  <div> <h3>usuario:</h3>  <ul>
                        {this.state.items.map(item => (
                            <li key={item.id}>{item.text}</li>
                        ))}
                    </ul>  </div></div>
                    <p style={{color: "white"}}>Escribe aqui :</p><input  type="text"  name="usuario"  id="usuario"   onChange={this.handleChange}  value={this.state.text} required/>
                    <button  style={{color: "red",
                        width:"30%"}} id ="add" onClick={this.handleRespuesta}  onDoubleClick={this.handleCountclick}> Enviar   </button>

                </form>
                <div className="text-center ">
                    <p className="copy">
                        Derechos Reservados

                        <a  href="latineando.co">Latineado.co</a>
                    </p>
                </div>
            </div>


        );
    }

}
class Formulario  extends React.Component{
     render(){
        return ( <div style={{background:"black", color:"white" ,}}className="formulario2" >
           <h5 style={{color: "red", }}>Formulario</h5>

                nombre:   <input type="text" id="nombre" required />
                telefono: <input type="number" id="numero" required/>
                correo:   <input type="text" required/>
                 <input type="submit"/>

            </div>
        )

    };
}


ReactDOM.render(
    <div>
        <Chatusuario/>,
    </div>,
    document.getElementById('container'));

