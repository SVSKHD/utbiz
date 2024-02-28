import ZerodhaBrokerForm from "@/components/forms/zerodhaForm"
import { useState } from "react"
const ZerodhaComponent = () => {
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
export default ZerodhaComponent