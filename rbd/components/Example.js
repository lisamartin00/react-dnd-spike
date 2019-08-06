import { useState } from 'react';
import { css} from '@emotion/core';
import { cx } from 'emotion';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  //transition: .5s all ease-in-out;

  .item {
    background-color: #fff;
    list-style-type: none;
  }

  &.is-dragging {
    .item {
      height: 20px !important;
      overflow: hidden;
    }
  }
`;


// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
}));

// TODO compare maintainability / support of this compared to arrayMove package
// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


const Example = () => {
  const [items, setItems] = useState(getItems(10));

  const handleDragEnd = (result) => { 
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            //style={getListStyle(snapshot.isDraggingOver)}
            //className={cx({'is-dragging': snapshot.isDraggingOver})}
            css={containerStyles}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    style={provided.draggableProps.style}
                    className="item"
                  >
                    <div {...provided.dragHandleProps} css={dragStyles}>---</div>
                    {item.content}
                    <br />longer content i don't want to show on drag
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Example;
