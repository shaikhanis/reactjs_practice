import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="my-3" src="https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-17.gif" alt="loading" />
            </div>
        )
    }
}

export default Spinner