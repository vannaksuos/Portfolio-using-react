import React from "react";
import {
    Link
} from "react-router-dom";

function Header() {
    return(
        <header>
            <nav>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="/home">About Vannak</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/projects">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://docs.google.com/document/d/1TG1AxdkdHTwQYl2IIOfe3yy8XWEfSndD1zRivSKYvm8/edit?usp=sharing" target="_blank">Resume</a>
                </li>
                </ul>
        </nav>
        </header>
    )
}
export default Header;