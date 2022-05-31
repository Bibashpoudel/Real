import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./multiRangeSlider.css";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);
  const changemaximumvalue = (event) => {
    event.preventDefault();
    let value = Math.max(Number(event.target.value), minVal + 1);

    setMaxVal(value);
    maxValRef.current = value;
  };
  return (
    <div className="area">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 100);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={changemaximumvalue}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />

        {minVal === 0 ? (
          <div className="slider__left-value">{minVal}</div>
        ) : minVal <= 100 ? (
          <div className="slider__left-value">{minVal} k</div>
        ) : minVal <= 1000 ? (
          <div className="slider__left-value">{minVal / 100} Lakh</div>
        ) : minVal <= 10000 ? (
          <div className="slider__left-value">{minVal / 100} Lakh</div>
        ) : minVal <= 29999 ? (
          <div className="slider__left-value">
            {(minVal / 10000).toFixed(2)} Cr
          </div>
        ) : minVal === 30000 ? (
          <div className="slider__left-value">{minVal / 10000} Cr above</div>
        ) : (
          ""
        )}

        {maxVal <= 100 ? (
          <div className="slider__right-value">{maxVal} k</div>
        ) : maxVal <= 1000 ? (
          <div className="slider__right-value">{maxVal / 100} Lakh</div>
        ) : maxVal <= 10000 ? (
          <div className="slider__right-value">{maxVal / 100} Lakh</div>
        ) : maxVal <= 29999 ? (
          <div className="slider__right-value">
            {(maxVal / 10000).toFixed(2)} Cr
          </div>
        ) : maxVal === 30000 ? (
          <div className="slider__right-value">{maxVal / 10000} Cr above</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
