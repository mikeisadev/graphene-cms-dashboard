import PageHeader from "../components/PageHeader"
import PageBody from "../components/PageBody"
import ContentBox from "../components/ContentBox"
import LinkBox from "../components/LinkBox"

export default function Dashboard() {

    return (
        <>
            <PageHeader>
                <h1 className="page-title">Dashboard</h1>
                <p className="page-desc">Welcome to Graphene CMS. This is the dashboard, the starting point of your amazing next project!</p>
            </PageHeader>
            <PageBody>
                <ContentBox>
                    <p>Start from here!</p>
                    <div className="box-layout col-2">
                        <LinkBox
                            to={"/post/new"} 
                            icon={<i className="bi bi-pencil-square"></i>}
                            title="Publish an article!" 
                            description="Start building your blog publishing your posts!" 
                        />
                        <LinkBox
                            to={"/page/new"} 
                            icon={<i className="bi bi-file-earmark"></i>}
                            title="Add a page" 
                            description="Build your websites creating beautiful web pages." 
                        />
                        <LinkBox
                            to={"/form/new"} 
                            icon={<i className="bi bi-menu-button-wide"></i>}
                            title="Build a menù" 
                            description="Collect your leads building a form." 
                        />
                        <LinkBox
                            to={"/form/new"} 
                            icon={<i className="bi bi-input-cursor"></i>}
                            title="Build a form" 
                            description="Collect your leads building a form." 
                        />
                    </div>
                </ContentBox>
            </PageBody>
        </>
    )
}