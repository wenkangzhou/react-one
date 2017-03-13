import React from 'react';
import { Swipe, SwipeItem } from 'swipejs/react';

class ReactSwipeExampleApp extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {};
     }

    componentDidMount() {
        let mySwipe = this.refs.swipe.instance;
        // You can call swipe methods on `mySwipe`
        // mySwipe.prev()
        // mySwipe.next()
        // mySwipe.getPos()
        // mySwipe.getNumSlides()
        // mySwipe.slide()
        // mySwipe.restart()
        // mySwipe.stop()
        // mySwipe.kill()
    }

    onTransactionEnd(index, elem) {
        // Your own logic
    }

    handleCallback(index, elem) {
        // Your own logic
    }

    handleClick(e) {
        // Your own logic
    }

    render() {
        var self = this;
        var item = this.props.data.map(function(dataitem,index) {
            return (
                <SwipeItem key={index} className='custom-swipe-item-class'
                    onClick={self.handleClick.bind(self)}>
                    <section>
                        <div className="swipecontainer photo" style={{height:442+'px'}}>
                            <nav>
                                <ul>
                                    <li>{dataitem.data.hp_title}</li>
                                </ul>
                            </nav>
                            <div className="main">
                                <img src={dataitem.data.hp_img_url}/>
                                <div className="etc">{dataitem.data.hp_author}</div>
                            </div>
                            <div className="sub">
                                <div className="quotation">
                                    {dataitem.data.hp_content}
                                </div>
                            </div>
                        </div>
                    </section>
                </SwipeItem>
            );
        });
        return (
            <Swipe className='custom-swipe-container-class'
                   ref='swipe'
                   startSlide={0}
                   speed={1000}
                   auto={3000}
                   draggable={false}
                   continuous={true}
                   autoRestart={false}
                   disableScroll={false}
                   stopPropagation={false}
                   callback={this.handleCallback.bind(this)}
                   transitionEnd={this.onTransactionEnd.bind(this)}>
                {item}
            </Swipe>
        );
    }
}
export default ReactSwipeExampleApp;