describe("Is this working", function() {
  it("should work", function() {
    expect(true).toEqual(true);
  });
});


describe("Palindrome solution", function() {
  it("If the word or phrase is the same backwards as forwards it should return true", function() {
    expect(isPalindrome("racecar")).toEqual(true);
  });

  it("should return false if the word is not the same backwards as it is forwards", function() {
    expect(isPalindrome("hello")).toEqual(false);
  });

  it("should return true despite capital letters or spacing", function() {
    expect(isPalindrome("Never odd or even")).toEqual(true);
  });
});
