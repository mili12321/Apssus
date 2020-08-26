export class ComposeNote extends React.Component {

    render() {
        return (<section>
            <input type="text" onChange={(ev) => {
                this.props.onWriteNote(ev.target.value)
            }} />
        </section>
        )
    }
}