import React, { useState, useEffect } from "react";
import baseUrl from "../helper/baseUrl";
import Link from "next/link";

const Shops = ({ shop }) => {
	const [data, setData] = useState([]);
	let sort = "";

	useEffect(() => {
		let dumpData = [];
		shop.map((item, i) =>
			dumpData.push(item.name.charAt(0).toUpperCase() + item.name.slice(1))
		);
		const sortedDumpDataAsc = dumpData.sort();

		setData(sortedDumpDataAsc);
	}, [shop]);

	return (
		<>
			<main className="container m-auto">
				<h1 className="md:text-2xl text-lg font-bold dark:text-white mt-8">
					<font style={{ verticalAlign: "inherit" }}>
						<font style={{ verticalAlign: "inherit" }}>All shops</font>
					</font>
				</h1>
				<div className="my-8 flex flex-row justify-between">
					{data.map((item, i) => (
						<div key={i}>
							<div className="row">
								{sort === item[0] ? (
									<>
										<div className="flex flex-wrap">
											<div className="col-md-1">
												<Link href={"/store/[store]"} as={`/store/${item}`}>
													<a className="md:w-1/4 w-1/2 dark:text-white">
														<font style={{ verticalAlign: "inherit" }}>
															<font style={{ verticalAlign: "inherit" }}>
																{item}
															</font>
														</font>
													</a>
												</Link>
											</div>
										</div>
									</>
								) : (
									<>
										{/* {(sort = item[0])}
										<h3 className="mt-4 mb-2 text-xl font-semibold dark:text-white">
											<font style={{ verticalAlign: "inherit" }}>{sort}</font>
										</h3> */}
										<div className="flex flex-wrap">
											<div className="col-md-1">
												<Link href={"/store/[store]"} as={`/store/${item}`}>
													<a className="md:w-1/4 w-1/2 dark:text-white">
														<font style={{ verticalAlign: "inherit" }}>
															<font style={{ verticalAlign: "inherit" }}>
																{item}
															</font>
														</font>
													</a>
												</Link>
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export async function getStaticProps(context) {
	const res = await fetch(`${baseUrl}/api/company`);
	const data = await res.json();
	return {
		props: { shop: data }, // will be passed to the page component as props
	};
}
export default Shops;
