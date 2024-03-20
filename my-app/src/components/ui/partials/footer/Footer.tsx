import React from "react";

type Props = React.HtmlHTMLAttributes<HTMLHtmlElement>;
export default function Footer(props: Props) {
    return (
        <footer {...props}>
            <nav>footer</nav>
        </footer>
    );
}
