/* eslint-disable react/react-in-jsx-scope */
import React from "react";

function NotFound() {
	return (
		<div id="notfound">
			<div id="notfoundbody">
				<section class="wrappernotfound">
					<div class="container-notfound">
						<div id="scene" class="scene" data-hover-only="false">
							<div class="circle" data-depth="1.2"></div>

							<div class="one" data-depth="0.9">
								<div class="content">
									<span class="piece"></span>
									<span class="piece"></span>
									<span class="piece"></span>
								</div>
							</div>

							<div class="two" data-depth="0.60">
								<div class="content">
									<span class="piece"></span>
									<span class="piece"></span>
									<span class="piece"></span>
								</div>
							</div>

							<div class="three" data-depth="0.40">
								<div class="content">
									<span class="piece"></span>
									<span class="piece"></span>
									<span class="piece"></span>
								</div>
							</div>

							<p class="p404" data-depth="0.50">
								404
							</p>
							<p class="p404" data-depth="0.10">
								404
							</p>
						</div>

						<div class="text">
							<article>
								<p>
									Uh oh! Looks like you got lost. <br />
								</p>
								<a href="/join_ob_team">
									<button>Go to Ingress Registration</button>
								</a>
							</article>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default NotFound;
