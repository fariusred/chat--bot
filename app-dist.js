"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chatusuario = function (_React$Component) {
    _inherits(Chatusuario, _React$Component);

    function Chatusuario(props) {
        _classCallCheck(this, Chatusuario);

        var _this = _possibleConstructorReturn(this, (Chatusuario.__proto__ || Object.getPrototypeOf(Chatusuario)).call(this, props));

        _this.state = {
            Golden: "Buen dia como esta ?",
            items: [],
            text: ""
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Chatusuario, [{
        key: "handleChange",
        value: function handleChange(e) {
            e.preventDefault();
            this.setState({ text: e.target.value });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var newItem = {
                text: this.state.text,
                id: Date.now()
            };
            this.setState(function (prevState) {
                return {
                    items: prevState.items.concat(newItem),
                    text: ""
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            console.log("ejecuta render");
            return React.createElement(
                "div",
                { className: "form" },
                React.createElement(
                    "div",
                    { className: "text-center" },
                    React.createElement(
                        "p",
                        { className: "titulo" },
                        " Golden Inflables"
                    )
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit, name: "formulario1" },
                    React.createElement(
                        "div",
                        { className: "conversaciones" },
                        " ",
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "h3",
                                null,
                                "Golden Inflables:"
                            ),
                            this.state.Golden
                        ),
                        "  ",
                        React.createElement(
                            "h3",
                            null,
                            "usurio:"
                        ),
                        " ",
                        React.createElement(
                            "ul",
                            null,
                            this.props.items.map(function (item) {
                                return React.createElement(
                                    "li",
                                    { key: item.id },
                                    item.text
                                );
                            })
                        ),
                        "  "
                    ),
                    React.createElement(
                        "p",
                        { style: { color: "white" } },
                        "Escribe aqui :"
                    ),
                    React.createElement("input", { type: "text", name: "usuario", id: "usuario", onChange: this.handleChange, value: this.state.text, required: true }),
                    React.createElement(
                        "button",
                        { style: { color: "red",
                                width: "30%" } },
                        " ",
                        'Enviar' + this.state.items,
                        "  "
                    )
                ),
                React.createElement(
                    "div",
                    { className: "text-center " },
                    React.createElement(
                        "p",
                        { className: "copy" },
                        "Derechos Reservados",
                        React.createElement(
                            "a",
                            { href: "latineando.co" },
                            "Latineado.co"
                        )
                    )
                )
            );
        }
    }]);

    return Chatusuario;
}(React.Component);

ReactDOM.render(React.createElement(Chatusuario, null), document.getElementById('container'));