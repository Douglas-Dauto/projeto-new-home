import React, { Children } from 'react';
import './Divisor.css';

interface Props {
    children: React.ReactNode;
}

function Divisor({ children }: Props): React.JSX.Element {
    const childrens = Children.toArray(children);

    return (
        <section className="divisor">
            {childrens[0]}
            <div></div>
            {childrens[1]}
        </section>
    );
}

export default Divisor;
