
import { Plugin } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";
import { toggleMark } from "prosemirror-commands";
import { Extension } from "rich-markdown-editor";


/**
 * https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
 * https://discuss.prosemirror.net/t/drag-and-drop-image-and-upload/243/4
 * https://github.com/shoobyban/prosemirror-dropimage/blob/master/src/index.js
 */


class ReuseAlreadyUploadedImage extends Extension {

  get name() {
    return "ReuseAlreadyUploadedImage";
  }

  get defaultOptions() {
    return {
      emptyNodeClass: "ReuseAlreadyUploadedImage",
      placeholder: "",
    };
  }

  get plugins() {
    return [
      new Plugin({
          
        props: {

            handleDOMEvents: {
                drop: (view, event) => {
                    
                    const { state, dispatch } = view;

                    const text = event.dataTransfer.getData("text")
                    console.log(text)
                    event.dataTransfer.clearData();

                    console.log(state.schema.marks)

                    const transaction = view.state.tr
                    .insertText(text, state.selection.from, state.selection.to)
                    .addMark(
                  state.selection.from,
                  state.selection.to + text.length,
                  state.schema.marks.link.create({ href: text })
                   );
                  view.dispatch(transaction);
                  return true;


                    // if (!state.selection.empty) {
                    //   toggleMark(this.editor.schema.marks.link, { href: text })(
                    //     state,
                    //     dispatch
                    //   );
                    //   return true;
                    // }

                }
                
            },
        //   decorations: state => {
        //     const { doc } = state;
        //     const decorations = [];
        //     const completelyEmpty =
        //       doc.textContent === "" &&
        //       doc.childCount <= 1 &&
        //       doc.content.size <= 2;

        //     doc.descendants((node, pos) => {
        //       if (!completelyEmpty) {
        //         return;
        //       }
        //       if (pos !== 0 || node.type.name !== "paragraph") {
        //         return;
        //       }

        //       const decoration = Decoration.node(pos, pos + node.nodeSize, {
        //         class: this.options.emptyNodeClass,
        //         "data-empty-text": this.options.placeholder,
        //       });
        //       decorations.push(decoration);
        //     });

        //     return DecorationSet.create(doc, decorations);
        //   },
        },
      }),
    ];
  }
}

export default ReuseAlreadyUploadedImage;

// function imageDropHandler(schema, url) {


//     console.log(schema)


//     let plugin = new Plugin({

//     props: {
//       handleDOMEvents: {
//         drop: (view, event) => {

//           alert("test")

//           return;

//           let files = event.dataTransfer.files
//           let sel = view.state.tr.curSelection
//           if (files.length == 0) {
//             return
//           }

//           if (event.preventDefault != undefined) {
//             event.preventDefault()
//           } else {
//             window.event.returnValue = false
//           }

//           ([...files[0]]).forEach((file, i, filelist) => {
//             console.log('drop', file)
//             if (
//               file.type != 'image/svg+xml' &&
//               file.type != 'image/png' &&
//               file.type != 'image/jpeg' &&
//               file.type != 'image/gif'
//             ) {
//               console.log('not image', file.type)
//               return
//             }
//             let formData = new FormData()
//             formData.append('file', file)
//             var x = new XMLHttpRequest()
//             x.open('POST', url)
//             x.onload = function (ret) {
//               if (x.readyState == 4 && x.status == 200) {
//                 let pos = view.posAtCoords({ left: event.clientX, top: event.clientY })
//                 view.dispatch(
//                   view.state.tr.replaceWith(pos.pos, pos.pos,
//                     schema.nodes.image.create({
//                       src: x.responseText
//                     }
//                     )
//                   ).scrollIntoView())
//               }
//             }
//             x.send(formData)
//           })
//         }
//       }
//     }
//   })

 