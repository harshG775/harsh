import React from "react";

type Props = React.HtmlHTMLAttributes<HTMLHtmlElement>;
export default function TopNavbar(props: Props) {
    return (
        <header {...props}>
            <nav>navbar</nav>
        </header>
    );
}
