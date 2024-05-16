import { IFullPostEditor } from "../../@types";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Button from "../buttons/Button";
import { Switch } from "@mui/material";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function FullPostEditor(props: IFullPostEditor) {
    const { title, slug } = props.postData as keyof object;

    return (
        <div className="new-content-wrap">
            <div className="new-content">
                <div className="main-box">
                    <div className="field-row">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Insert post title here!" value={title} onInput={props.onChange} />
                    </div>
                    <div className="field-row">
                        <label>Content</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={props.content}
                            onChange={(e, editor) => {
                                props.onContentChange(editor.getData())
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="meta-boxes">
                <div className="meta-box">
                    {
                        props.mode === 'edit' ? <Button className="secondary-btn w-full" icon={<i className="bi bi-box-arrow-up-right"></i>} text="Preview"/> : ''
                    }
                    <div className="field-row">
                        <label>Publish after saving?</label>
                        <Switch onChange={props.onVisibilityChange} checked={props.isPublic} />
                        <p className="small-info">Set this content as "{props.isPublic ? 'published' : 'draft'}" after saving.</p>
                    </div>
                </div>
                <div className="meta-box">
                    <div className="field-row">
                        <label>Slug</label>
                        <input type="text" name="slug" placeholder="Insert the post slug here..." value={slug} onInput={props.onChange}/>
                    </div>
                    <div className="field-row">
                        <label>Date and time</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker onChange={props.onDateChange} value={props.date}/>
                        </LocalizationProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}