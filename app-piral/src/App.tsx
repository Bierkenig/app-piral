import * as React from "react";
import { LayoutProps } from "piral-core";
import Logo from "./Logo";

const App: React.FC<LayoutProps> = ({}) => (
    <>
        <div className="main-wrapper">
            <header className="Header">
                <Logo />
            </header>
        </div>
    </>
);

export default App;