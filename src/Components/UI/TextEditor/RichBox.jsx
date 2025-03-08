import React, { useState } from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";

// Подключаем ВСЕ плагины
import "froala-editor/js/plugins/align.min.js";
import "froala-editor/js/plugins/char_counter.min.js";
import "froala-editor/js/plugins/code_beautifier.min.js";
import "froala-editor/js/plugins/code_view.min.js";
import "froala-editor/js/plugins/colors.min.js";
import "froala-editor/js/plugins/draggable.min.js";
import "froala-editor/js/plugins/emoticons.min.js";
import "froala-editor/js/plugins/entities.min.js";
import "froala-editor/js/plugins/file.min.js";
import "froala-editor/js/plugins/font_family.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import "froala-editor/js/plugins/fullscreen.min.js";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/image_manager.min.js";
import "froala-editor/js/plugins/inline_class.min.js";
import "froala-editor/js/plugins/inline_style.min.js";
import "froala-editor/js/plugins/line_breaker.min.js";
import "froala-editor/js/plugins/link.min.js";
import "froala-editor/js/plugins/lists.min.js";
import "froala-editor/js/plugins/paragraph_format.min.js";
import "froala-editor/js/plugins/paragraph_style.min.js";
import "froala-editor/js/plugins/quick_insert.min.js";
import "froala-editor/js/plugins/quote.min.js";
import "froala-editor/js/plugins/save.min.js";
import "froala-editor/js/plugins/special_characters.min.js";
import "froala-editor/js/plugins/table.min.js";
import "froala-editor/js/plugins/url.min.js";
import "froala-editor/js/plugins/video.min.js";
import "froala-editor/js/plugins/word_paste.min.js";

// Подключаем стили
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/plugins/image.min.css";
import "froala-editor/css/plugins/table.min.css";
import "froala-editor/css/plugins/colors.min.css";
import "froala-editor/css/plugins/code_view.min.css";
import "froala-editor/css/plugins/video.min.css";

export default function RichBox({ value, onChange }) {

    return (
        <div>
            <FroalaEditorComponent
                tag="textarea"
                model={value}
                onModelChange={onChange} // Обновляем состояние
                config={{
                    placeholderText: "Начни писать...",
                    height: 400,
                    theme: "gray", // Темная тема можно "gray", "red", "blue" и т.д.
                    toolbarSticky: true,
                    toolbarButtons: [
                        "undo", "redo", "|",
                        "bold", "italic", "underline", "strikeThrough", "|",
                        "fontFamily", "fontSize", "color", "|",
                        "formatOL", "formatUL", "align", "|",
                        "insertTable", "insertImage", "insertVideo", "insertLink", "|",
                        "quote", "insertFile", "emoticons", "|",
                        "codeView", "fullscreen"
                    ],
                    pluginsEnabled: [
                        "align", "charCounter", "codeBeautifier", "codeView", "colors",
                        "draggable", "emoticons", "entities", "file", "fontFamily", "fontSize",
                        "fullscreen", "image", "imageManager", "inlineClass", "inlineStyle",
                        "lineBreaker", "link", "lists", "paragraphFormat", "paragraphStyle",
                        "quickInsert", "quote", "save", "specialCharacters", "table",
                        "url", "video", "wordPaste"
                    ],
                    imageUpload: true,
                    imageUploadMethod: "base64",
                    imagePaste: true,
                    imageDefaultWidth: 300,
                    imageAllowedTypes: ["jpeg", "jpg", "png", "gif", "webp"],
                    videoUpload: true,
                    videoAllowedTypes: ["mp4", "webm", "ogg"],
                    tableResizer: true,
                    tableStyles: {
                        "fr-dashed-borders": "Dashed Borders",
                        "fr-alternate-rows": "Alternate Rows"
                    },
                    paragraphFormat: {
                        N: "Normal",
                        H1: "Heading 1",
                        H2: "Heading 2",
                        H3: "Heading 3",
                        H4: "Heading 4",
                        BLOCKQUOTE: "Quote"
                    },
                    fontFamily: {
                        "Arial,Helvetica,sans-serif": "Arial",
                        "Georgia,serif": "Georgia",
                        "Impact,Charcoal,sans-serif": "Impact",
                        "Tahoma,Geneva,sans-serif": "Tahoma",
                        "'Times New Roman',Times,serif": "Times New Roman",
                        "Verdana,Geneva,sans-serif": "Verdana"
                    },
                    fontSize: ["8", "10", "12", "14", "16", "18", "20", "24", "30", "36"],
                    colorsBackground: [
                        "#000000", "#333333", "#666666", "#999999", "#BBBBBB", "#DDDDDD", "#FFFFFF",
                        "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"
                    ],
                    colorsText: [
                        "#000000", "#333333", "#666666", "#999999", "#BBBBBB", "#DDDDDD", "#FFFFFF",
                        "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"
                    ],
                    shortcutsEnabled: ["bold", "italic", "underline", "strikeThrough", "insertTable", "insertLink"],
                    saveInterval: 5000, // Автосохранение каждые 5 секунд
                    codeBeautifierOptions: {
                        end_with_newline: true,
                        indent_inner_html: true,
                        indent_size: 2,
                        indent_char: " ",
                        wrap_line_length: 0,
                        extra_liners: []
                    }
                }}
            />
        </div>
    );
}
