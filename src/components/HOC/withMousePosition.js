import { Component } from 'react';

function withMousePosition(WrappedComponent) {
    class Hoc extends Component {
        state = {
            x: 0,
            y: 0,
        };

        updateMousePosition(e) {
            this.setState({ x: e.pageX, y: e.pageY });
        }

        componentDidMount() {
            // jak nalożyć listenera na odpowiedni komponent a nie na całe body dokumentu
            document.body.addEventListener(
                'mousemove',
                this.updateMousePosition.bind(this)
            );
        }

        render() {
            return (
                <WrappedComponent
                    mouseX={this.state.x}
                    mouseY={this.state.y}
                    {...this.props}
                />
            );
        }
    }

    return Hoc;
}

export default withMousePosition;
