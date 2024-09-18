import Button from "./Button";

export default function ProjectSideBar() {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 fond-bold uppercase md:text-xl text-stone-200">My Project</h2>
            <div>
                <Button>
                    + Add Projects
                </Button>
            </div>
            <ul>
                {/* <li><a href="#">coming soon</a></li> */}
            </ul>
        </aside>
    )
}