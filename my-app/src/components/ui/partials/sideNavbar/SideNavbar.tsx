import React from "react";

type Props = React.HtmlHTMLAttributes<HTMLHtmlElement>;
export default function SideNavbar(props: Props) {
    return (
        <aside {...props}>
            <nav>side navbar</nav>
        </aside>
    );
}
