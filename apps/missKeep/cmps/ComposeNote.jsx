export class ComposeNote extends React.Component {

    render() {
        return (<section>
            <span className="input-text">Add Note: </span><input className="add-input" type="text" onChange={(ev) => {
                this.props.onWriteNote(ev.target.value)
            }} />
        </section>
        )
    }
}