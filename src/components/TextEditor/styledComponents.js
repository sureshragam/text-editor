import styled from 'styled-components'

export const TextEditorContainer = styled.div`
  min-height: 100vh;
  background-color: #25262c;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TextEditorContentContainer = styled.div`
  width: 80%;
  height: 700px;
  background-color: #1b1c22;
  border-radius: 8px;
  padding: 10px 10px;

  display: flex;
  gap: 10px;
`
export const Heading = styled.h1`
  font-size: 25px;
  color: white;
  text-align: center;
`
export const Image = styled.img`
  width: 90%;
  margin: auto;
  display: block;
  margin-top: 50px;
`
export const ImageContainer = styled.div`
  flex-basis: 40%;
`
export const ContentContainer = styled.div`
  flex-basis: 60%;
  background-color: #25262c;
  border-radius: 8px;
  border-style: solid;
  border-color: #cbd5e1;
  border-width: 1px;
  padding: 20px 0px;
`
export const CustomButton = styled.button`
  background-color: transparent;
  outline: none;
  border-style: none;
  cursor: pointer;
  margin-left: 10px;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  font-size: 20px;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  padding: 10px 10px;
  width: 100%;
  height: 95%;
  border-style: none;
  outline: none;
  color: white;
  font-size: 18px;
  font-weight: ${props => (props.bold === true ? 'bold' : 'normal')};
  text-decoration: ${props =>
    props.underline === true ? 'underline' : 'normal'};
  font-style: ${props => (props.italic === true ? 'italic' : 'normal')};
`
