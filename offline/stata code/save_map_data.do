/*
Author:		Kyle Foreman
Date:		29 January 2012
Updated:	30 January 2012
			2 February 2012 (Leslie Mallinger)
Purpose:	Save treemap data from GBDx
*/

** settings
clear all
set more off
set mem 4g
set maxvar 7000
cap log close

** log
log using "${save_dir}/logs/save_map_${cause}_${sex}.smcl", replace

** open data and save relevant part
use if cause_viz == "${cause}" & substr(geo_sex, -1, 1) == "${sex}" using "${tmp_dir}/all_cfs.dta", clear
foreach m of global metrics {
	di "`m'"
	renpfix `m'_m_ m
	renpfix `m'_l_ l
	renpfix `m'_u_ u
	outsheet geo_sex m* l* u* using "${save_dir}/data/map/${cause}_${sex}_`m'.csv", comma replace
	drop m* l* u*
}
