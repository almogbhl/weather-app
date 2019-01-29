// import React from 'react';
import _ from 'lodash';

export default function average(data) {
    return _.round(_.sum(data)/data.length);
}