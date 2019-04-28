import React from "react";
import Item from "./Card";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`;

const List = ({title, cards, listID}) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <ListContainer
	  {...provided.droppableProps}
	  {...provided.dragHandleProps}
	  ref={provided.innerRef}
	>
	  <h4>{title}</h4>
          {cards.map((card, index) => (
            <Item
              key={card.id}
              text={card.text}
              id={card.id}
              index={index}
            />
          ))}
          {provided.placeholder}
	  <ActionButton listID={listID} />
        </ListContainer>
      )}
    </Droppable>
  );
};

export default List;
