import styled from 'styled-components';
import { ControlsProps, LeftBarItems } from '../../dynamic/renderViewConstants';
import BaseComponent from '../helper/baseComponent';

export const Content = styled.div`
  margin-left: 200px;
`;

export const Item = styled.div`
  display: flex;
  user-select: none;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
  z-index: 7000 !important;
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
  border: 1px solid #ddd;
  ${
    (props: {isDarkTheme?: boolean})=>(
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

export const Clone = styled(Item)`
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