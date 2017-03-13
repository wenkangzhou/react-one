import React from 'react'
import './HomeView.scss'
import Hiswipe from './Swipe'

var HomeView = React.createClass({
        getInitialState: function() {
            return {data: []};
        },
        componentDidMount: function() {
            var self = this;
            fetch('http://v3.wufazhuce.com:8000/api/hp/idlist/0')
            .then(data => data.json())
            .then(json => json.data)
            .then(function(data){data.map(function(item){
                fetch('http://v3.wufazhuce.com:8000/api/hp/detail/'+item)
                .then(function(data){data.json().then(function(json){
                    self.state.data.push(json);
                    self.setState(self.state.data)
                })})
            })})
    },
    render: function() {
        if(this.state.data.length < 10){
            return (<h5>loading</h5>);
        }
        return (
            <div>
                <Hiswipe data={this.state.data}/>
            </div>
        );
    }
});
export default HomeView