import { JSXElementConstructor, ReactElement } from "react";

export type  View1Props = {
    displayText: string
    children: ReactElement<any, string | JSXElementConstructor<any>>;
};