import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async({}) => {
    const sesssion = await getServerSession(authOptions)

    return (
        <pre>{JSON.stringify(sesssion)}</pre>
    )
}

export default page