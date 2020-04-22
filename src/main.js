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
		$('#searchButton').hide();

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
			// console.log(response);
			// console.log(response.Countries);
			$('#search-thing').append('<select class="form-style" id="country" name="country">');
			response.Countries.forEach(function(country) {
				// console.log(country.Country);
				// console.log(country.Slug);
				$('#country').append('<option value="' + country.Slug + '">' + country.Country + '</option>');
				// $('#display-country').append(
				// 	`Country: ${country.Country}` +
				// 		'<br>' +
				// 		'<br>' +
				// 		'<li>' +
				// 		`Total Cases: ${country.TotalConfirmed}` +
				// 		'<br>' +
				// 		'<li>' +
				// 		`Total Deaths: ${country.TotalDeaths}` +
				// 		'<br>' +
				// 		'<li>' +
				// 		`Total Recovered: ${country.TotalRecovered}` +
				// 		'<br>' +
				// 		'<br>'
				// );
			});
			$('#search-thing').append('</select>');
			$('#country-button').click(function() {
				let userVal = $('#country').val();
				console.log(userVal);
			});
		};
	});
});
