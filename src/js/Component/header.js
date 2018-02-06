import React from 'react'
var headerCss=require("../../css/header.css");

export default class Header extends React.Component{

    render(){
        /* const headerStyle={
             divStyle:{background:"black",textAlign:"center"},
             pStyle:{color:"yellow"},
             hStyle:{color:"white"}
         };*/
        return (
            <div class={headerCss.header}>
                <h1>这是头部</h1>
                <p>这是小标题</p>
            </div>
        );
    }

}
