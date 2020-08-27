
export class EmailCompose extends React.Component {
    render() {
        const { children, isModalShown,onToggleModal } = this.props
        return (
            <div className={ `modal-wrapper ${isModalShown ? '' : 'hide'}` } onClick={onToggleModal } >
                <div className="modal-content" onClick={ (ev) => ev.stopPropagation() }>
                    <div className="modal-header">
                        <div className="modal-title">New Massage</div>
                        <button onClick={ onToggleModal }>X</button>
                    </div>
                    { children }
                    <i class="fas fa-trash"></i>
                </div>
            </div >
        )
    }
}
