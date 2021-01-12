import React from 'react';
import {PropTypes} from 'prop-types';
import './ObjectPrewiev.scss';

export function ObjectPreview(props) {
    return (
        <div className="object-preview">
            <label className="preview-label">Wybrana wartość:</label>
            {printProperties(props.objectToView, props.propertyToSkip)}
        </div>
    );
}

function isNotEmpty(object) {
    if (object && Object.keys(object).length) {
        return true;
    }
}

function printProperties(object, propertyToSkip) {
    if (isNotEmpty(object)) {
        let keys = Object.keys(object);
        if (propertyToSkip) {
            keys = keys.filter((key) => {
                return key !== propertyToSkip;
            });
        }
        return (<div className="object-preview-properties">
            {keys.map((key, index) => (
                <p className="object-property" key={index}>{object[key]}</p>
            ))}
        </div>);

    }
}

ObjectPreview.propTypes = {
    objectToView: PropTypes.object,
    propertyToSkip: PropTypes.string
}