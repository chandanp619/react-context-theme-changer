import React, { useState, createContext, useContext } from "react";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import Sidebar from "../components/partials/Sidebar";


export default function LayoutProvider(props) {
    return (
        <div className="layout">
            <Header />
            <div className="content-wrap">
                {props.children}
                {props.sidebar?
                <Sidebar />
                :null}
            </div>
            <Footer />
        </div>
    )
};
