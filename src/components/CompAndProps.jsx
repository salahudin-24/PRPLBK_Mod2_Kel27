import React, { Component } from "react";
import '../App.css';

function Square(props) {
    return (
        <div>
            <h2> Saya {props.komponen}</h2>
            <p> {props.nim} </p>
            <a href="mailto:{{props.email}}">{props.email}</a>
        </div>
    );
}

export default class CompAndProps extends Component {
    render() {
        const bgColor1 = {
            backgroundColor: this.props.bgColor1
        }
        const bgColor2 = {
            backgroundColor: this.props.bgColor2
        }
        const bgColor3 = {
            backgroundColor: this.props.bgColor3
        }
        const bgColor4 = {
            backgroundColor: this.props.bgColor4
            
        }
        return (
            
            <div className="wrapper">
                
                <div className="User-info" style={bgColor1}>
                    <Square komponen='Ilham Pratama' 
                            nim='21120120130060' 
                            email='ilhamthedark538@gmail.com' />
                </div>
                <div className="User-info" style={bgColor2}>
                    <Square komponen='Rizal Agatha Erdin Agesyah' 
                            nim='21120120120010'
                            email='rizalagatha1403@gmail.com' />
                </div>
                <div className="User-info" style={bgColor3}>
                    <Square komponen='Indria Wulandari Sihotang' 
                            nim='21120120120013'
                            email='Wulandariindria08@gmail.com'  />
                </div>
                <div className="User-info" style={bgColor4}>
                    <Square komponen='Salahudin Al Ayubi' 
                            nim='21120120140078'
                            email='salahudinalayubi24@gmail.com'  />
                </div>
            </div>
        )
    }
}