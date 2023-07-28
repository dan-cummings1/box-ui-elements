/**
 * @flow
 * @file Checkbox cell
 * @author Jacob Potter <pttr.jcb@gmail.com>
 */

import React from 'react';
import { BoxItem } from '../../../common/types/core';
import { TYPE_FOLDER } from '../../../constants';

type Props = {
    item: BoxItem,
    onItemChecked: Function,
};

const CheckboxCell = ({ item, onItemChecked }: Props) => {
    const onChecked = event => {
        onItemChecked(event, item);
    };
    const { type } = item;
    const returnValue =
        type !== TYPE_FOLDER ? (
            <div className="be-item-checkbox">
                <input type="checkbox" onChange={onChecked} id={item.id} />
            </div>
        ) : (
            ''
        );
    return returnValue;
};

export default CheckboxCell;
