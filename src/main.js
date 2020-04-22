import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
// import { Keys } from '../keys.js';
// require('dotenv').config();

$(document).ready(function() {
	let url = 'https://api.covid19api.com/summary';
	$('#searchButton').click(function(event) {
		event.preventDefault();

		let request = new XMLHttpRequest();

		request.onreadystatechange = function() {
			if (this.readyState === 4 && this.status === 200) {
				const response = JSON.parse(this.responseText);
				getElements(response);
			}
		};

		request.open(`GET`, url, true);
		request.send();

		const getElements = function(response) {
			console.log(response);
			console.log(response.Countries);
			response.Countries.forEach(function(country) {
				$('#display-country').append(`Country: ${country.Country}`);
			});
		};
	});
});
