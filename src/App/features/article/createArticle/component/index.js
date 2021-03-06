import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { addArticle } from '../actionsCreator';
import axios from '../../../../util/axiosConfig';
import Style from './style.module.scss';

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      title: '',
      content: '',
      isAllFieldsFilled: null,
    };
    this.addArticle = this.addArticle.bind(this);
    this.clearEditor = this.clearEditor.bind(this);
  }

  handleEditorChange = (content, editor) => {
    this.setState((state, props) => {
      return { content };
    });
  };

  handleTitleChange = (e) => {
    const title = e.target.value;
    this.setState((state, props) => {
      return { title: title };
    });
  };

  addArticle() {
    if (!this.state.title || !this.state.content) {
      this.setState((state, props) => {
        return { isAllFieldsFilled: false };
      });
      setTimeout(() => {
        this.setState((state, props) => {
          return { isAllFieldsFilled: null };
        });
      }, 3000);
      return;
    }

    this.props.addArticle({
      title: this.state.title,
      content: this.state.content,
    });
  }

  clearEditor() {
    if (!this.state.title || !this.state.content) return;
    this.setState((state, props) => {
      return { title: '', content: '' };
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.isAllFieldsFilled === false ? (
            <div className={Style.danger}>
              Please Fill All Fields thanks ...
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={Style.title}>
          <div className={Style.common}>Title : </div>
          <div>
            <input
              name='title'
              type='text'
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
        </div>
        <div>
          <div className={Style.common}>Body : </div>
        </div>
        <Editor
          apiKey='xemi0gu8epvh5gghdl8iopvds9g3iejyfuvljtcv7ybkcact'
          initialValue={this.state.content}
          value={this.state.content}
          disabled={false}
          id='create-article'
          init={{
            //  selector: 'textarea#myTextArea',
            height: 300,
            menubar: true,
            file_picker_types: 'image file',
            images_upload_base_path: `${process.env.REACT_APP_API_URL}/api/images/`,
            images_upload_url: `${process.env.REACT_APP_API_URL}/api/images`,
            images_upload_credentials: true,
            images_upload_handler: function (blobInfo, success, failure) {
              let data = new FormData();
              data.append('image', blobInfo.blob(), blobInfo.filename());
              axios
                .post('/api/images/upload-images', data)
                .then(function (res) {
                  // console.log(res);
                  // success(`${process.env.REACT_APP_API_URL}/images/${res.data.location}`);
                  success(res.data.location);
                })
                .catch(function (err) {
                  failure('HTTP Error: ' + err.message);
                });
            },
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar: `undo redo | formatselect| image | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help`,
            image_uploadtab: true,
          }}
          onEditorChange={this.handleEditorChange}
        />
        <div>
          <input
            className={`${Style.addArticle} ${Style.editorBtn}`}
            type='submit'
            value='Add Article'
            onClick={this.addArticle}
          />
          <input
            className={`${Style.clearEditor} ${Style.editorBtn}`}
            type='submit'
            value='Clear Editor'
            onClick={this.clearEditor}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addArticle,
};

export default connect(null, mapDispatchToProps)(index);
