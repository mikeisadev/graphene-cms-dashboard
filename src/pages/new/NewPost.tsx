import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import QuillEditor from "../../components/editors/QuillEditor";
import DropdownButton from "../../components/buttons/DropdownButton";
import Button from "../../components/buttons/Button";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { PostState } from "../../@types";

export default function NewPost() {
    const [post, setPost] = useState<PostState>({
        title: '',
        slug: '',
        content: ''
    })

    function handlePostTitle(e: React.ChangeEvent) {
        const title: String = (e.target as HTMLInputElement).value

        setPost({...post, title: title})
        setPost({...post, slug: title.trim().toLowerCase().replace(/\s/g, '-')})
    }

    // function handlePostContent(e) {

    // }

    useEffect(() => {
        console.log(post)
    }, [post])

    return (
        <>
            <PageHeader>
                <div className="flex-between">
                    <h1 className="page-title">New post</h1>
                    <DropdownButton type="primary-btn" text="Save and publish" dropdownIcon={<i className="bi bi-arrow-return-left"></i>}>
                        <Button text="Save and leave draft"/>
                    </DropdownButton>
                </div>
            </PageHeader>
            <div className="new-content-wrap">
                <div className="new-content">
                    <div className="main-box">
                        <div className="field-row">
                            <label>Title</label>
                            <input type="text" name="post-title" placeholder="Insert post title here!" onChange={handlePostTitle} />
                        </div>
                        <div className="field-row">
                            <label>Content</label>
                            <QuillEditor setValue={(value) => {console.log(value)}}/>
                        </div>
                    </div>
                </div>
                <div className="meta-boxes">
                    <div className="meta-box">
                        <Button className="secondary-btn w-full" icon={<i className="bi bi-box-arrow-up-right"></i>} text="Preview"/>
                    </div>
                    <div className="meta-box">
                        <div className="field-row">
                            <label>Slug</label>
                            <input type="text" name="post-slug" placeholder="Insert the post slug here..."/>
                        </div>
                        <div className="field-row">
                            <label>Date</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker />
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}