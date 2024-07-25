import { Given, Then, When } from "@cucumber/cucumber";
import assert from "assert";
import { add } from "../../src/add.js";

Given("numbers {int} and {int}", function (n1, n2) {
  this.numbers = [n1, n2];
});

When("added", function () {
  this.added = add(...this.numbers);
});

Then("get sum of {int}", function (expectedResponse) {
  assert.equal(this.added, expectedResponse);
});
