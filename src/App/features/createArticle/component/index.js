
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Editor } from '@tinymce/tinymce-react';
import { addArticle } from '../actionsCreator';
import axios from 'axios';
import Style from './style.module.scss';

export class index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      open: false,
      title: '',
      content: ''
    }
    this.addArticle = this.addArticle.bind(this);
  }

  handleEditorChange = (content, editor) => {
    //  console.log('Content was updated:', content);
    this.setState((state, props) => {
      return { content }
    })


  }

  handleTitleChange = (e) => {
    console.log(e.target);
    const title = e.target.value;

    //  console.log('Content was updated:', title);
    this.setState((state, props) => {
      return { title: title }
    })


  }

  addArticle() {

    if (!this.state.title) {
      return;
    }
    console.log({ title: this.state.title, content: this.state.content });
    const article = { title: this.state.title, content: this.state.content }
    this.props.addArticle(article);
  }

  render() {
    return (
      <div>
        <div className={Style.title}>
          <div className={Style.common}>Title : </div>
          <div><input name='title' type='text' onChange={this.handleTitleChange} /></div>
        </div>
        <div>
          <div className={Style.common}>Body : </div>
        </div>
        <Editor
          apiKey='xemi0gu8epvh5gghdl8iopvds9g3iejyfuvljtcv7ybkcact'
          initialValue=""
          disabled={false}

          id='create-article'
          init={{
            //  selector: 'textarea#myTextArea',
            height: 300,
            menubar: true,
            file_picker_types: 'image file',
            images_upload_base_path: 'http://localhost:5000/images/',
            images_upload_url: 'http://localhost:5000/images',
            images_upload_credentials: true,
            images_upload_handler: function (blobInfo, success, failure) {
              let data = new FormData();
              data.append('file', blobInfo.blob(), blobInfo.filename());
              axios.post('/api/articles/upload-images', data)
                .then(function (res) {
                  console.log(res);
                  success('http://localhost:5000/images/' + res.data.location);
                })
                .catch(function (err) {
                  failure('HTTP Error: ' + err.message);
                });
            },
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              `undo redo | formatselect| image | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help`,
            image_uploadtab: true,

          }}
          onEditorChange={this.handleEditorChange}
        />
        <div>
          <input className={Style.submit} type='submit' value='add aricle' onClick={this.addArticle} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  addArticle
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
