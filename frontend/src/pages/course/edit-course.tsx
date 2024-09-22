
import { useRouter, useSearchParams } from "next/navigation";
import CreateUpdateCourse from "./create-course";

const UpdateCourse: React.FC = () => {
    const searchParams = useSearchParams()
 
  const id = searchParams.get('id')

    console.log('id',id)
    return (
        <div>
            <CreateUpdateCourse courseId={id}/>
        </div>
    )
};

export default UpdateCourse;
