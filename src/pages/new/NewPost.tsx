import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import DropdownButton from "../../components/buttons/DropdownButton";
import Button from "../../components/buttons/Button";
import axios from "axios";
import FullPostEditor from "../../components/editors/FullPostEditor";
import dayjs from "dayjs";

export default function NewPost() {
    const [post, setPost] = useState<object>({})
    const [content, setContent] = useState<string>('')
    const [date, setDate] = useState<any>(dayjs())
    const [isPublic, setIsPublic] = useState<boolean>(true)

    /**
     * Handle common fields.
     */
    function handleField(val: React.FormEvent<HTMLInputElement>) {
        const input = val.target as HTMLInputElement

        const data = {[input.name]: input.value}

        if (input.name === 'title') {
            data['slug'] = input.value.trim().replace(/\s/g, '-').toLowerCase()
        }

        setPost({...post, ...data})
    }

    /**
     * Handle QuillJS content.
     */
    function handleContent(value: string) {
        setContent(value)
        
        setPost({...post, content: value})

    }

    /**
     * Handle date.
     */
    function handleDate(date: any) {
        setDate(date)

        setPost({...post, publishDate: date})
    }

    /**
     * Handle visibility change.
     */
    function handleVisibility(e: any) {
        setIsPublic(e.target.checked)
    }

    /**
     * Save post
     */
    function handleSavePost() {
        const data: object = {
            ...post,
            content: content,
            date: date,
            visibility: isPublic ? 'public' : 'draft'
        }

        axios.post('http://localhost:3000/posts', data)
            .then(data => {
                console.log(data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        console.log(post)
    }, [post])

    return (
        <>
            <PageHeader>
                <div className="flex-between">
                    <h1 className="page-title">New post</h1>
                    <DropdownButton type="primary-btn" text={`Save and ${isPublic ? 'publish' : 'leave draft'}`} dropdownIcon={<i className="bi bi-arrow-return-left"></i>} onClick={handleSavePost}>
                        <Button text="Save and leave draft"/>
                    </DropdownButton>
                </div>
            </PageHeader>
            <FullPostEditor 
                mode="new"
                postData={post}
                isPublic={isPublic}
                date={date}
                onChange={handleField} 
                onContentChange={handleContent} 
                onDateChange={handleDate}
                onVisibilityChange={handleVisibility}
                onSave={handleSavePost}
            />
        </>
    )
}