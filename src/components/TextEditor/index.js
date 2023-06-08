import {Component} from 'react'
import {AiOutlineUnderline} from 'react-icons/ai'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'

import {
  TextEditorContainer,
  TextEditorContentContainer,
  Heading,
  Image,
  ImageContainer,
  ContentContainer,
  CustomButton,
  TextArea,
} from './styledComponents'
import './index.css'

class TextEditor extends Component {
  state = {textAreaValue: '', bold: false, italic: false, underline: false}

  onChangeTextArea = event => {
    this.setState({textAreaValue: event.target.textAreaValue})
  }

  onClickBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {textAreaValue, bold, italic, underline} = this.state
    return (
      <TextEditorContainer>
        <TextEditorContentContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <ContentContainer>
            <ul>
              <li>
                <CustomButton
                  type="button"
                  onClick={this.onClickBold}
                  data-testid="bold"
                  active={bold}
                >
                  <VscBold />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  type="button"
                  onClick={this.onClickItalic}
                  data-testid="italic"
                  active={italic}
                >
                  <GoItalic />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  type="button"
                  onClick={this.onClickUnderline}
                  data-testid="underline"
                  active={underline}
                >
                  <AiOutlineUnderline />
                </CustomButton>
              </li>
            </ul>

            <hr />
            <TextArea
              value={textAreaValue}
              bold={bold}
              italic={italic}
              underline={underline}
              onChange={this.onChangeTextArea}
            />
          </ContentContainer>
        </TextEditorContentContainer>
      </TextEditorContainer>
    )
  }
}

export default TextEditor
