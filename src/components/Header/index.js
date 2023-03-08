import React from 'react';

import styles from "./my-style.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Profile : S-R-i-c-e</h1>
            <p>A rare selection of choice cuts...</p>
        </header>
    )
}