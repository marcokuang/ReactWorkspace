import React from 'react';

class Spinner extends React.Component{

    render(){
        return (
            <div class="ui segment spinner">
                <div class="ui active inverted dimmer">
                    <div class="ui text loader">Loading</div>
                </div>
            </div>
        )
    }
}

export default Spinner;