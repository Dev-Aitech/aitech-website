"use client";

export default function Footer() {
	return (
		<footer className="text-xs py-4 px-6">
			<div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-center items-center">
				<div className="text-center">
					<p>
						Copyright © AiTech S.r.l. |{" "}
						<a href="mailto:info@aitech.srl?subject=Richiesta%20contatto">
							info@aitech.srl
						</a>{" "}
						| Via Branze 45, 25123 Brescia (BS) | Cod. Fisc. e P.IVA:
						04631770981 | REA: BS - 629369 | Cap. sociale: €20.000,00 i.v.
					</p>
				</div>
				{/*
					<div className="mt-2 md:mt-0 text-center md:text-right">
						<a href="/privacy" className="underline">
							Privacy policy
						</a>
					</div>
				*/}
			</div>
		</footer>
	);
}
