// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {

    image(e) {
        e.target.closest(".d-bubble").classList.toggle("image")
    }
    image_upload(e) {
        const file = e.target.files[0]
        document.querySelector(".image-upload").src = URL.createObjectURL(file)
    }
}