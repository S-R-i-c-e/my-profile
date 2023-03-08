import React from 'react';

import styles from "./my-style.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Title test</h1>
            <p>Text test</p>
        </header>
    )
}