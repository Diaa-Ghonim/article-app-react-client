import { API_URL } from '../constants';
// import {t} from '@tinymce/tinymce-react'
export function tinymceInit() {
  tinymce.init({
    selector: '#textarea',
    height: '300px',
    //  theme : 'modern' ,
    plugins:
      ' image emoticons wordcount  codesample anchor autolink link lists insertdatetime autolink lists  media  table ',
    toolbar:
      'undo redo image  emoticons wordcount bold italic blockquote link forecolor backcolor insertdatetime anchor codesample  numlist bullist addcomment showcomments code align ',
    // toolbar_mode: 'floating',
    /**
     * this will send request to this route article/uploadImages
     * to every image
     */
    images_upload_url: 'article/upload-images',
    /**
     * instead of send it from server
     * i will set url here which serve images in server
     */
    images_upload_base_path: API_URL + 'images',
    file_picker_types: 'image',
    /*
    // here i can use it instead of using tiny mce default requset
    
    images_upload_handler: function (blobInfo, success, failure, progress) {
      var xhr, formData;

      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'article/uploadImages');

      xhr.upload.onprogress = function (e) {
        progress((e.loaded / e.total) * 100);
      };

      xhr.onload = function () {
        var json;

        if (xhr.status < 200 || xhr.status >= 300) {
          failure('HTTP Error: ' + xhr.status);
          return;
        }

        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != 'string') {
          failure('Invalid JSON: ' + xhr.responseText);
          return;
        }

        success('images' + json.location);
      };

      xhr.onerror = function () {
        failure(
          'Image upload failed due to a XHR Transport error. Code: ' +
            xhr.status
        );
      };

      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());

      xhr.send(formData);
    },
    */
    automatic_uploads: false,
    contextmenu: '',
    // contextmenu: 'paste | link image inserttable | cell row column deletetable | inspect',

    relative_urls: true,
    default_link_target: '_blank',
    link_default_protocol: 'https',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    codesample_global_prismjs: true,
    codesample_languages: [
      { text: 'HTML/XML', value: 'markup' },
      { text: 'JavaScript', value: 'javascript' },
      { text: 'CSS', value: 'css' },
      { text: 'PHP', value: 'php' },
      { text: 'Ruby', value: 'ruby' },
      { text: 'Python', value: 'python' },
      { text: 'Java', value: 'java' },
      { text: 'C', value: 'c' },
      { text: 'C#', value: 'csharp' },
      { text: 'C++', value: 'cpp' },
    ],
  });
  Prism.highlightAll();
  //    tinymce.EditorManager.editors = [];
}

// this will fix routing problem when i route to another link
// as profile or home and return to create article again
// tinymce body become not editable
// and to fix this i will remove this editor and reinitalize it again .
export function removeAndReinitializeEditor() {
  tinymce.EditorManager.execCommand('mceRemoveEditor', true, 'textarea');
  tinymce.EditorManager.execCommand('mceAddEditor', true, 'textarea');
  // tinyMCE.DOM.addClass('pre', 'line-numbers');
}
