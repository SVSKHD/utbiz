import ULayout from "@/components/layout/layout"
import ZerodhaComponent from "./zerodha"
import UUpstoxComponent from "./upstox"
const UHomeComponent = () => {
    const brokers = [
        {
            name: "Zerodha",
            component: <ZerodhaComponent />
        },
        {
            name:"UpStox",
            component:<UUpstoxComponent/>
        }
    ]
    return (
        <>
            <ULayout>
                <div className="container">
                    <div className="row">
                        {brokers.map((r) => (
                            <>
                                <div className="col">
                                    {r.component}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </ULayout>
        </>
    )
}
export default UHomeComponent