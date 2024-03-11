import { title } from "@/components/primitives";
import QRCode from "react-qr-code";
export default function PricingPage({ params }) {
	
	return (
		<div>
			<h1 className={title()}>Qr code </h1>
<br />
<br />
<div className="box-content h-32 w-32 p-4 border-4">
<QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={params.slug[0]}

	fgColor="#ffffff"
	bgColor="#ff0000"
    viewBox={`0 0 256 256`}
    />
</div>
			
	<br />
	<br />
	
	<p>User ID:{params.slug[0]}</p>
	<p>Name:{params.slug[1].replace(/%20/g, " ")}</p>
		</div>
	);
}
