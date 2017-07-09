
class Chatusuario extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Golden:"Buen dia como esta ?",
            items:[],
            text:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    };

    handleChange(e) {
        e.preventDefault();
        this.setState({text: e.target.value});
    }

handleSubmit(e){
        e.preventDefault();
        var newItem ={
          text: this.state.text,
          id: Date.now()
        };
        this.setState((prevState) =>({
            items:prevState.items.concat(newItem),
            text:""
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
                <form onSubmit={this.handleSubmit} name="formulario1" >


                    <div className="conversaciones"> <div><h3>Golden Inflables:</h3>{this.state.Golden}</div>  <h3>usurio:</h3> <ul>
                        {this.props.items.map(item => (
                            <li key={item.id}>{item.text}</li>
                        ))}
                    </ul>  </div>
                    <p style={{color: "white"}}>Escribe aqui :</p><input  type="text"  name="usuario"  id="usuario"   onChange={this.handleChange}  value={this.state.text} required/>
                    <button  style={{color: "red",
                        width:"30%"}}> {'Enviar' + (this.state.items)}  </button>

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



ReactDOM.render(
    <Chatusuario/>,
    document.getElementById('container')
);
