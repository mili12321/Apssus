export class ComposeNote extends React.Component {

    render() {
        return (<section>
            Add Note: <input className="add-input" type="text" onChange={(ev) => {
                this.props.onWriteNote(ev.target.value)
            }} />
        </section>
        )
    }
}