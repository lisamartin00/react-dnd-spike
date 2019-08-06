// import { useState } from 'react';
import { css } from '@emotion/core';
// import { useDrag, useDrop } from 'react-dnd';

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

const Example = () => {
  // const [{ opacity }, drag, preview] = useDrag({
  //   item: { type: 'list-item' },
  //   collect: monitor => ({
  //     opacity: monitor.isDragging() ? 0.4 : 1,
  //   }),
  // });

  // const SortableItem = ({ value }) => (
  //   <li css={itemStyles} ref={preview} style={opacity}>
  //     <span css={dragStyles} ref={drag}>---</span>
  //     {value}
  //     <ul>
  //       <li>a</li>
  //       <li>b</li>
  //       <li>c</li>
  //     </ul>
  //   </li>
  // );

  // const [, drop] = useDrop({
  //   accept: 'list-item',
  //   hover(item, monitor) {
  //     // if (!ref.current) {
  //     //   return;
  //     // }
  //     const dragIndex = item.index;
  //     const hoverIndex = index;
  //     // Don't replace items with themselves
  //     if (dragIndex === hoverIndex) {
  //       return;
  //     }
  //     // Determine rectangle on screen
  //     const hoverBoundingRect = ref.current.getBoundingClientRect();
  //     // Get vertical middle
  //     const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
  //     // Determine mouse position
  //     const clientOffset = monitor.getClientOffset();
  //     // Get pixels to the top
  //     const hoverClientY = clientOffset.y - hoverBoundingRect.top;
  //     // Only perform the move when the mouse has crossed half of the items height
  //     // When dragging downwards, only move when the cursor is below 50%
  //     // When dragging upwards, only move when the cursor is above 50%
  //     // Dragging downwards
  //     if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
  //       return;
  //     }
  //     // Dragging upwards
  //     if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
  //       return;
  //     }
  //     // Time to actually perform the action
  //     moveCard(dragIndex, hoverIndex);
  //     // Note: we're mutating the monitor item here!
  //     // Generally it's better to avoid mutations,
  //     // but it's good here for the sake of performance
  //     // to avoid expensive index searches.
  //     item.index = hoverIndex;
  //   },
  // });

  const SortableList = ({ items }) => (
    // <ul css={containerStyles}>
    //   {items.map((value, index) => (
    //     <SortableItem key={`item-${index}`} index={index} value={value} />
    //   ))}
    // </ul>
    <div>hello</div>
  );

  // const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);

  // const onSortEnd = ({ oldIndex, newIndex }) => {
  //   setItems(arrayMove(items, oldIndex, newIndex));
  // };

  return <SortableList />;
};

export default Example;
