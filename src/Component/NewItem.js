import React, { Component } from 'react'

export class NewItem extends Component {
   
    render() {
        let { title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl?"https://images.hindustantimes.com/img/2022/11/28/1600x900/Cirkus_teaser_1669615371323_1669615565774_1669615565774.jpeg": imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewItem
