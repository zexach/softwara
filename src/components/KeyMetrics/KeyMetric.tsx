import React from "react";
import './KeyMetric.scss';
import CountUp from "react-countup";

type Props = {
    children?: React.ReactNode;
    text: string;
    number: number;
    cca: boolean;
}

const KeyMetric: React.FC<Props> = ({ text, number, cca }) => {

    return(
        <>
        <div className="key-metric">
            <p className="key-metric__text">{ text }</p>
            <div className="key-metric__number">
                <CountUp className="key-metric__number__info" enableScrollSpy={true} redraw={false} duration={3} end={number} />
                <span className="key-metric__number__span">{ cca ? '+' : '' }</span>
            </div>
        </div>
        </>
    );
}

export default KeyMetric;