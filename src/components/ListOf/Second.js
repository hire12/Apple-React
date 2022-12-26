import React, { Component } from 'react'

export class Second extends Component {
  render() {
    return (
        <section class="second-hightlight-wrapper">
		<div class="container">

			<div class="new-alert">
				New
			</div>

			<div class="title-wraper bold black">
				MacBook Air 
			</div> 

			<div class="description-wrapper black">
				Twice the speed. Twice the storage.
			</div>

			<div class="price-wrapper grey">
				From $999.
			</div>

			<div class="links-wrapper">
				<ul>
					<li><a href="www.Evangadi.com">Learn more</a></li>
					<li><a href="www.Evangadi.com">Buy</a></li>
				</ul> 
			</div>
		</div>
	</section>
    )
  }
}

export default Second