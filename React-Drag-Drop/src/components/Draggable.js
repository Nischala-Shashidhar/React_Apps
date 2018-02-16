import React from 'react'

export default class Draggable extends React.Component {
    
    render() {
        let Tag   = 'div'
        let props = Object.assign({}, this.props)
       
        if (this.props.enabled) {
            props.draggable   = 'true'
            props.onDragStart = this.onDragStart.bind(this)
            props.onDrop = this.ondrop.bind(this)
            "drop(event)"
        }
        delete props.enabled
        
        return (
            <Tag {...props}>
                {props.children}
            </Tag>
        )
    }

    onDragStart(e) {
        if (typeof this.props.onDragStart === 'function') 
        this.props.onDragStart(e)
        let props = Object.assign({}, this.props)
        console.log(props)
        e.dataTransfer.setData(props.type, props.data)
    }

    ondrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData(this.props.type);
    ev.target.appendChild(document.getElementById(data));
}
}

Draggable.defaultProps = {
    enabled: true
}