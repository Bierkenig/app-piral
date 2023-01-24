import * as React from "react";
import { Redirect } from "react-router-dom";
import { ComponentsState, ErrorComponentsState } from "piral-core";
import App from "./App";

export const startMenu: React.FC = () => <Redirect to="/browse" />;

export const layout: Partial<ComponentsState> = {
    Layout: App,
};

export const errors: Partial<ErrorComponentsState> = {
    not_found: () => <div />,
};