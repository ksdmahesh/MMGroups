import React from 'react';
import styled from 'styled-components';
import { ControlsProps, LeftBarItems } from '../../dynamic/renderViewConstants';
import BaseComponent from '../helper/baseComponent';
import { getBox, Position, BoxModel } from 'css-box-model';
import { useRef, useContext, useEffect } from 'react';
import { BeforeCapture, Draggable } from 'react-beautiful-dnd';

type UnbindFn = () => void;

export type EventOptions = {
  passive?: boolean,
  capture?: boolean,
  // sometimes an event might only event want to be bound once
  once?: boolean,
};

export type EventBinding = {
  eventName: string,
  fn: Function,
  options?: EventOptions,
};

function getOptions(
  shared?: EventOptions,
  fromBinding?: EventOptions,
): EventOptions {
  return {
    ...shared,
    ...fromBinding,
  };
}

export default function bindEvents(
  el: HTMLElement | any,
  bindings: EventBinding[],
  sharedOptions?: EventOptions,
): Function {
  const unbindings: UnbindFn[] = bindings.map(
    (binding: EventBinding): UnbindFn => {
      const options: Object = getOptions(sharedOptions, binding.options);

      el.addEventListener(binding.eventName, binding.fn, options);

      return function unbind() {
        el.removeEventListener(binding.eventName, binding.fn, options);
      };
    },
  );

  // Return a function to unbind events
  return function unbindAll() {
    unbindings.forEach((unbind: UnbindFn) => {
      unbind();
    });
  };
}

type ItemProps = {
  index: number,
  id: string,
  children?: JSX.Element | string,
  isDarkTheme: boolean,
  isExpander?: boolean,
  isDragDisabled?: boolean
};

export const Content = styled.div`
  margin-left: 200px;
`;

export const StyledItem = styled.div`
  display: flex;
  user-select: none;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
  // z-index: 7000;
  background: #fff;
  ${
  (props: { isDragging?: boolean, isDarkTheme?: boolean, isExpander?: boolean }) => (
    props.isDragging
      ?
      `border: 1px dashed #000;${BaseComponent.getTheme(props.isDarkTheme || false, props.isExpander ? 'header' : 'control', true)}`
      :
      `border: 1px solid transparent;${BaseComponent.getTheme(props.isDarkTheme || false, props.isExpander ? 'header' : 'control', true)}`
  )}
 `;

export const DroppedItem = styled.div`
  display: flex;
  user-select: none;
  padding: 0.5rem;
  margin: 0 0  0.5rem 0;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
  background: #fff;
  height: auto !important;
  width: 100%;
  // z-index: 7000;
  border: 1px solid #ddd;
  ${
  (props: { isDarkTheme?: boolean }) => (
    BaseComponent.getTheme(props.isDarkTheme || false, 'control2', true))
  }
  }
 `;

export const CloneDroppedItem = styled(DroppedItem)`
  + div {
    display: ${
  (props: { isDragging?: boolean }) => (props.isDragging ? 'none !important' : 'flex !important')};
  }
`;

const ListBin = styled.div`
  border: 1px solid ${'gray'};
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 6000;
  background-color: white;
`;

export const ListTitle = styled.h3`
  padding: ${8}px;
  width: 250px;
`;

export const Bin = styled(ListBin)`
  border-color: ${'red'};
`;

export const Clone = styled(StyledItem)`
  + div {
    display: ${
  (props: { isDragging?: boolean }) => (props.isDragging ? 'none !important' : 'flex !important')};
  }
`;

export const Handle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  user-select: none;
  margin: -0.5rem 0.5rem -0.5rem -0.5rem;
  padding: 0.5rem;
  line-height: 1.5;
  border-radius: 3px 0 0 3px;
  background: #fff;
  border-right: 1px solid #ddd;
  color: #000;
`;

export const List = styled.div`
  border: 1px ${
  (props: { isDraggingOver?: boolean }) => (props.isDraggingOver ? 'dashed #000' : 'solid #ddd')};
  background: #fff;
  padding: 0.5rem 0.5rem 0;
  border-radius: 3px;
  flex: 0 0 150px;
  font-family: sans-serif;
`;

export const Kiosk = styled(List)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  border: 0;
  overflow-x: hidden;
  ${
  (props: { isDraggingOver?: boolean }) => (
    props.isDraggingOver
      ?
      'overflow-y: hidden;'
      :
      'overflow-y: auto;'
  )}

`;

export const Container = styled(List)`
  margin: 0.5rem 0.5rem 1.5rem;
`;

export const Notice = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border: 1px solid transparent;
  line-height: 1.5;
  color: #aaa;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  color: #000;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
`;

export const ButtonText = styled.div`
  margin: 0 1rem;
`;

export const Item: any = (props: ItemProps) => {
  const { id, index, children, isDarkTheme, isExpander, isDragDisabled } = props;
  const ref: any = useRef<HTMLElement>(null);

  useEffect(() => {
    const unsubscribe = bindEvents(window, [
      {
        eventName: 'onBeforeCapture',
        fn: (event: CustomEvent) => {

          const before: BeforeCapture = event.detail.before;
          const clientSelection: Position = event.detail.clientSelection;

          if (before.mode !== 'FLUID') {
            return;
          }

          if (before.draggableId !== id) {
            return;
          }

          const el: HTMLElement | null = ref.current;

          if (!el) {
            return;
          }

          const box: BoxModel = getBox(el);

          // want to shrink the item to 200px wide.
          // want it to be centered as much as possible to the cursor
          const targetWidth: number = 250;
          const halfWidth: number = targetWidth / 2;
          const distanceToLeft: number = Math.max(
            clientSelection.x - box.borderBox.left,
            0,
          );

          el.style.width = `${targetWidth}px`;

          // Nothing left to do
          if (distanceToLeft < halfWidth) {
            return;
          }

          // what the new left will be
          const proposedLeftOffset: number = distanceToLeft - halfWidth;
          // what the raw right value would be
          const targetRight: number =
            box.borderBox.left + proposedLeftOffset + targetWidth;

          // how much we would be going past the right value
          const rightOverlap: number = Math.max(
            targetRight - box.borderBox.right,
            0,
          );

          // need to ensure that we don't pull the element past
          // it's resting right position
          const leftOffset: number = proposedLeftOffset - rightOverlap;

          el.style.position = 'relative';
          // el.style.zIndex = '5005';
          el.style.left = `${leftOffset}px`;
        },
      },
    ]);

    // return unsubscribe;
  }, [id])

  return (
    <Draggable
      draggableId={id}
      index={index}
      disableInteractiveElementBlocking={true}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <>
          <StyledItem
            onMouseDownCapture={(event) => {
              const current: any = {
                x: event.clientX,
                y: event.clientY,
              };
              clientSelectionRef.current = current;
            }}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={(node: HTMLElement | null) => {
              provided.innerRef(node);
              ref.current = node;
            }}
            isDarkTheme={isDarkTheme}
            isExpander={isExpander}
            style={{ ...provided.draggableProps.style, zIndex: 7001 }}
          >
            {children}
          </StyledItem>
          {snapshot.isDragging && (
            <Clone>
              {children}
            </Clone>
          )}
        </>
      )}
    </Draggable>
  );
};

export var controlItems: {
  controlItems: {
    [x: string]: {
      sectionIndex: number,
      cellIndex: number,
      rowIndex: number,
      columnIndex: number,
      controls: ControlsProps
    }
  }
} = {
  controlItems: {

  }
};

export var leftControlItems: LeftBarItems = {};

export const dragIndex = {
  index: 0
};

export const clientSelectionRef: {
  current: Position
} = {
  current: {
    x: 0,
    y: 0
  }
}