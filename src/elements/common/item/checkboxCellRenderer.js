/**
 * @flow
 * @file Function to render the multi-select checkbox
 * @author Jacob Potter <pttr.jcb@gmail.com>
 */

import React from 'react';
import CheckboxCell from './CheckboxCell';
import type { BoxItem } from '../../../common/types/core';

export default (onItemChecked: Function) => ({ rowData }: { rowData: BoxItem }) => (
    <CheckboxCell key={rowData.id} onItemChecked={onItemChecked} item={rowData} />
);
