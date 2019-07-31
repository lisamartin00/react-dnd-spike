import { useState } from 'react';
import { css } from '@emotion/core';
import { SortableContainer, SortableElement, sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const dragStyles = css`
  cursor: move;
  border-top: 1px solid #777;
  border-bottom: 1px solid #777;
  color: #777;
  display: inline-block;
  width: 13px;
  height: 13px;
  line-height: .8;
  margin-right: 5px;
`;

const containerStyles = css`
  background-color: #ccc;
  border: 1px solid #777;
  margin: 40px;
  padding: 0;
`;

const itemStyles = css`
  background-color: #fff;
  list-style-type: none;
`;

const DragHandle = sortableHandle(() => <span css={dragStyles}>---</span>);

const Example = () => {
  const SortableItem = SortableElement(({ value }) => (
    <li css={itemStyles}>
      <DragHandle />
      {value}
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </li>
  ));

  const SortableList = SortableContainer(({ items }) => (
    <ul css={containerStyles}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  ));

  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return <SortableList items={items} onSortEnd={onSortEnd} useDragHandle />;
};

export default Example;
