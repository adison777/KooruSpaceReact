import React, { Component } from 'react';

class Calendar extends Component {

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center m-t-lg">
                            <h1>
                                Calendar
                            </h1>
                            <small>
                                일정 관리를 위한 영역
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Calendar