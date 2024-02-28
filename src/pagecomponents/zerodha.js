import ZerodhaBrokerForm from "@/components/forms/zerodhaForm"
import { useState } from "react"
const zerodhaComponent = () => {
    const [brokerDetails, setBrokerDetails] = useState({
        clientId: "",
        apiKey: "",
        apiSecret: "",
        accessToken: ""
    });
    return (
        <>
            <ZerodhaBrokerForm brokerDetails={brokerDetails} />
        </>
    )
}
export default zerodhaComponent