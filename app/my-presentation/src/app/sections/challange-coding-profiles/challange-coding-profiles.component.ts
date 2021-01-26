import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challange-coding-profiles',
  templateUrl: './challange-coding-profiles.component.html',
  styleUrls: ['./challange-coding-profiles.component.scss']
})
export class ChallangeCodingProfilesComponent implements OnInit {

  profiles = [
    "https://leetcode.com/florinasavei/",
    "https://www.hackerrank.com/asaveiflorin",
    "https://app.codesignal.com/profile/florinasavei",
    "https://www.codewars.com/users/asaveiflorin",
    "https://exercism.io/profiles/florinasavei",
    "https://www.freecodecamp.org/florinasavei",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
